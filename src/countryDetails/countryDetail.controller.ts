import {
  Controller,
  Get,
  Param,
} from '@nestjs/common';
import { CountryDetailService } from './countryDetail.service';

@Controller('countryDetail')
export class CountryDetailController {
  constructor(private readonly countryDetailService: CountryDetailService) { }

  @Get(':name')
  public async getCountryArticle(@Param('name') name: string) {
    return this.countryDetailService.getCountryDetail(name);
  }

}