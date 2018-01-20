import { ICountry } from './icountry';
export class  Country implements ICountry{

    constructor(public alpha2Code:string,public name:string){

    }
}