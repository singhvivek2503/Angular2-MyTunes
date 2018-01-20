import { IUser } from './iuser';

export class User implements IUser{
    userName:string;
    email:string;
    password:string;
    country:string;
    birthday:Date;

    constructor(authData:any){
        this.email = authData.email;
    }
}