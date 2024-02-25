import {
  Injectable,
  Logger,
  NotFoundException,
  UnprocessableEntityException,
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
        const article = wikiMediaApiResp.query.pages[18951905].extract;
        return article;
      })
      .catch(error => {
        console.error(error);
      });
    return countryArticle;
  }
}