
import {
    Injectable,
    Logger,
    NotFoundException,
    UnprocessableEntityException,
} from '@nestjs/common';
import { Countries } from './countries.interface';

@Injectable()
export class CountriesService {
    private countries: Array<Countries> = [];

    public findAll(): Array<Countries> {
        return this.countries;
    }

    public findOne(name: string): Countries {
        const post: Countries = this.countries.find(country => country.name === name);

        if (!post) {
            throw new NotFoundException('Post not found.');
        }

        return post;
    }

    public create(post: Countries): Countries {


        // if the title is already in use by another post
        const countryExists: boolean = this.countries.some(
            (item) => item.name === post.name,
        );
        if (countryExists) {
            throw new UnprocessableEntityException('Country already exists.');
        }

        // find the next id for a new blog post

        const countryToAdd: Countries = {
            ...post,
        };

        this.countries.push(countryToAdd);

        return countryToAdd;
    }


}
