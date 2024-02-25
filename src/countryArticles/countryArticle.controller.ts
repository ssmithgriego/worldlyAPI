import {
  Controller,
  Get,
  Param,
} from '@nestjs/common';
import { CountryArticleService } from './countryArticle.service';

@Controller('countryArticle')
export class CountryArticleController {
  constructor(private readonly countryArticleService: CountryArticleService) { }

  @Get(':name')
  public async getCountryArticle(@Param('name') name: string) {
    return this.countryArticleService.getCountryArticle(name);
  }

}