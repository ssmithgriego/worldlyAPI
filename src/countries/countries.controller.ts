
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
import { CountriesService } from './countries.service';
import { Countries } from './countries.interface';

@Controller('countries')
export class CountriesController {
    constructor(private readonly countriesService: CountriesService) { }

    @Get()
    public findAll(): Array<Countries> {
        return this.countriesService.findAll();
    }



}
