import {
  Injectable,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { wikiMediaApiResp } from './countryArticle.interface';

@Injectable()
export class CountryArticleService {
  public async getCountryArticle(countryName: string) {
    const url = `http://en.wikipedia.org/w/api.php?` +
      `format=json&action=query&prop=extracts&exlimit=max` +
      `&explaintext&exintro&titles=${countryName}&redirects=`;

    const countryArticle = await fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('API request failed');
        }
      })
      .then(data => {
        let wikiMediaApiResp: wikiMediaApiResp = data;
        const article = Object.entries(wikiMediaApiResp.query.pages)[0][1].extract;
        return article;
      })
      .catch(error => {
        console.error(error);
        throw new HttpException('REST Countries API Error', HttpStatus.BAD_REQUEST);
      });
    return countryArticle;
  }
}
