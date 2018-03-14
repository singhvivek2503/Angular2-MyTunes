import { Component } from '@angular/core';
import { UserService } from 'app/user/services/user.srv';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms/src/directives/ng_form';
@Component({
    selector:'login-component',
    templateUrl:'login.component.html',

})
export class LoginComponent{
    public error:string;

    constructor(private userService:UserService,private router:Router){     
    }

    public login(form:NgForm){        
        let user = this.userService.login(form.value.userName,form.value.password);
        
        user.then(()=>this.router.navigateByUrl(""))
        .catch((e)=>{ 
            console.log(e);
            this.error = e.message;
        });
    }
}