import {
  Injectable,
  Logger,
  NotFoundException,
  UnprocessableEntityException,
} from '@nestjs/common';
import { CountryIdentifier, CountryDetailApiResp } from './countryDetail.interface';
import { COUNTRIES } from '../common/constants';

@Injectable()
export class CountryDetailService {
  public async getCountryDetail(countryName: string) {
    const country: CountryIdentifier = COUNTRIES.find((country) => country.name === countryName);
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
        const countryDetails: CountryDetailApiResp = data;
        return countryDetails;

      })
      .catch(error => {
        console.error(error);
      });

    return countryDetail;
  }

}
