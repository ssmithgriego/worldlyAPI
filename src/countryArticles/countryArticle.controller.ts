import {
  Controller,
  Body,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UseFilters,
} from '@nestjs/common';
import { CountryArticleService } from './countryArticle.service';

@Controller('countryArticle')
export class CountryArticleController {
  constructor(private readonly countryArticleService: CountryArticleService) { }

  @Get(':name')
  public async getCountryArticle(@Param('name') name: string) {
    console.log('here?');
    return this.countryArticleService.getCountryArticle(name);
  }

}