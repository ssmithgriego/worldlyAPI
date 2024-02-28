import {
  Injectable,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { CountryIdentifier, RestCountriesApiResp, CountryDetail } from './countryDetail.interface';
import { COUNTRIES } from '../common/constants';

@Injectable()
export class CountryDetailService {
  public async getCountryDetail(countryName: string) {

    const country: CountryIdentifier = COUNTRIES.find((country) => country.name === countryName);

    if (!country?.code) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }
    const url = `https://restcountries.com/v3.1/alpha/${country.code}`;

    const countryDetail = await fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          console.log(response);
          throw new Error('API request failed');
        }
      })
      .then(data => {
        const restCountriesResp: RestCountriesApiResp = data;

        const countryDetail = {
          name: restCountriesResp[0]?.name.common || '',
          officialName: restCountriesResp[0]?.name.official || '',
          population: restCountriesResp[0]?.population || '',
          unMember: restCountriesResp[0]?.unMember || '',
          capital: restCountriesResp[0]?.capital[0] || '',
          latlng: restCountriesResp[0]?.latlng || '',
          languages: Object.entries(restCountriesResp[0]?.languages)[0][1] || '',
          flag: restCountriesResp[0]?.flag || '',
        }

        return countryDetail;

      })
      .catch(error => {
        console.error(error);
        throw new HttpException('REST Countries API Error', HttpStatus.BAD_REQUEST);
      });

    return countryDetail;
  }

  private convertToStandardCase = (name) => {
    const countryWords: string[] = name.split(' ');
    const countryNameFirstLetters = countryWords.map((word) => word.charAt(0));
    const capitalizedLetters = countryNameFirstLetters.map((char) => char.toUpperCase());
  }

}
