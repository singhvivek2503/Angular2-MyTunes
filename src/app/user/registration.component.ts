import { Component } from '@angular/core';
import { ICountry } from 'app/common/models/icountry';
import { UserService } from 'app/user/services/user.srv';
import { CountryService } from '../common/services/country.srv';
import { Router } from '@angular/router';
@Component({
    selector:'registration-component',
    templateUrl:'registration.component.html'
})
export class RegistrationComponent{
    public countries:Array<ICountry>=[];
    constructor(private userService:UserService,private countryService:CountryService,private router:Router){
        this.countryService.getCountries()
        .subscribe(countries=>{
            this.countries = countries;
        })
    }

    register(email:string,password:string,country?:string,birthday?:Date){
        var user = this.userService.register(email,password,country,birthday);
        if(user){
            this.router.navigateByUrl("/");
        };
    }
}