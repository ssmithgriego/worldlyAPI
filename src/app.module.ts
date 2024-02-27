import { Module } from '@nestjs/common';
import { CountryArticleModule } from './countryArticles/countryArticle.module';
import { CountryDetailModule } from './countryDetails/countryDetail.module';

@Module({
  imports: [CountryArticleModule, CountryDetailModule],
  controllers: [],
  providers: [],
})
export class AppModule { }