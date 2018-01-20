import {Component } from '@angular/core'; 
import {UserService } from 'app/user/services/user.srv'; 
import {Router,ROUTER_CONFIGURATION } from '@angular/router'; 
import {IUser } from '../user/models/iuser'; 
import { SearchComponent } from './search.component';

@Component( {
    selector:'header-component', 
    templateUrl:'header.component.html', 
    styles:[
        `
        .header-component .navbar-nav .btn{
            margin-left:1em;
        }
        `]
})
export class HeaderComponent {
    public  user:IUser; 
    constructor(private userService:UserService, private router:Router) {
        
        this.user = this.userService.getUser();
        // this.userService.getUser()
        // .subscribe(user =>  {
        //     this.user = user; 
        // })
    }

    search($event){
        this.router.navigate(["albums"],{queryParams:{query:$event,page:0}});        
    }

    logout(){
        // this.userService.logout()
        // .subscribe(()=>{
        //     this.router.navigateByUrl("/")
        // })

        this.userService.logout();
        this.router.navigateByUrl("/");
    }
}