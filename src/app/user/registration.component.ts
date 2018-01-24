import {Component }from '@angular/core'; 
import {ICountry }from 'app/common/models/icountry'; 
import {UserService }from 'app/user/services/user.srv'; 
import {CountryService }from '../common/services/country.srv'; 
import {Router }from '@angular/router'; 
import {Form }from '@angular/forms/src/directives/form_interface'; 
import {FormGroup, FormControl, Validators }from '@angular/forms'; 
//import {Validators }from '@angular/forms'; 
@Component( {
    selector:'registration-component', 
    templateUrl:'registration.component.html'
})
export class RegistrationComponent {
    regForm:FormGroup; 
    public countries:Array <ICountry>= []; 
    constructor(private userService:UserService, private countryService:CountryService
        , private router:Router) {
        this.regForm = new FormGroup( {
                email:new FormControl('', [Validators.required,Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")]), 
                password:new FormControl('', [Validators.required]), 
                country:new FormControl(''), 
                birthday:new FormControl('')
            }); 
        this.countryService.getCountries()
        .subscribe(countries =>  {
            this.countries = countries; 
        })
    }

    register() {
        console.log(this.regForm);
        let email = this.regForm.controls['email'];
        let password = this.regForm.controls['password'];
        let country = this.regForm.controls['country'];
        let birthday = this.regForm.controls['birthday'];
        
        let user = this.userService.register(email.value, password.value, country.value, birthday.value); 
        user.then(()=>this.router.navigateByUrl("/login"));
    }
}