import { Component } from '@angular/core';
import { UserService } from 'app/user/services/user.srv';
import { Router } from '@angular/router';
@Component({
    selector:'login-component',
    templateUrl:'login.component.html',

})
export class LoginComponent{
    public error:string;
    constructor(private userService:UserService,private router:Router){
        console.log('here in login');
    }

    public login(userName,password){
        let user = this.userService.login(userName,password);
        if(user){
            this.router.navigateByUrl("/");
        }        
    }
}