import { Module } from '@nestjs/common';
import { CountryArticleService } from './countryArticle.service';
import { CountryArticleController } from './countryArticle.controller';

@Module({
  providers: [CountryArticleService],
  controllers: [CountryArticleController],
  exports: [CountryArticleService],
})

export class CountryArticleModule { }
