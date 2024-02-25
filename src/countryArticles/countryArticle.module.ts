import { Module } from '@nestjs/common';
import { CountryArticleService } from './countryArticle.service';
import { CountryArticleController } from './countryArticle.controller';

@Module({
  providers: [CountryArticleController],
  controllers: [CountryArticleController],
  exports: [CountryArticleService],
})

export class CountriesModule { }
