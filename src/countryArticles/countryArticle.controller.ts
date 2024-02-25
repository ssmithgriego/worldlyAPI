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
import { wikiMediaApiResp } from './countryArticle.interface';

@Controller('countries')
export class CountryArticleController {
  constructor(private readonly countryArticleService: CountryArticleService) { }

  @Get(':name')
  public async findOne(@Param('name') name: string) {
    return this.countryArticleService.getCountryArticle(name);
  }

}