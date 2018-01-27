import { CanActivate } from "@angular/router/src/interfaces";
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router/src/router_state";
import { Observable } from 'rxjs/Observable';
import { UserService } from '../../user/services/user.srv';

@Injectable()
export class AuthGuard implements CanActivate{
    constructor(private userService:UserService){}
    canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot):Observable<boolean>|boolean{
        if(this.userService.user){
            return true;
        }
        return false;
    }
}