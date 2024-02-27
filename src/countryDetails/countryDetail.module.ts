import { Module } from '@nestjs/common';
import { CountryDetailService } from './countryDetail.service';
import { CountryDetailController } from './countryDetail.controller';

@Module({
  providers: [CountryDetailService],
  controllers: [CountryDetailController],
  exports: [CountryDetailService],
})

export class CountryDetailModule { }
