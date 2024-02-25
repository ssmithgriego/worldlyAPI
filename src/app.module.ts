import { Module } from '@nestjs/common';
import { CountryArticleModule } from './countryArticles/countryArticle.module';

@Module({
  imports: [CountryArticleModule],
  controllers: [],
  providers: [],
})
export class AppModule { }