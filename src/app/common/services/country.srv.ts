import { Injectable } from "@angular/core";
import { Http } from '@angular/http';
import { Observable } from 'rxjs/observable';
import { ICountry } from '../models/icountry';
import { Country } from "app/common/models/country";


@Injectable()
export class CountryService{

    constructor(private http:Http){

    }

    getCountries(){
        return new Observable<any>(obs=>{
            this.http.get("https://restcountries.eu/rest/v1/all")
            .map(res=>{
                let resJ = res.json();
                var countries:Array<ICountry>=[];
                resJ.forEach(element => {
                    countries.push(new Country(element.name,element.alpha2Code))
                });
                return countries;
            })
            .subscribe(countries=>{
                obs.next(countries);
            })
        })
    }
}