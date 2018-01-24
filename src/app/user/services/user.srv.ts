import {Observable}from 'rxjs/observable'; 
import {IUser}from '../models/iuser'; 
import {User}from '../models/user'; 
import {Injectable }from '@angular/core'; 

declare var firebase:any; 

@Injectable()
export class UserService {
    
    public user:User;

    constructor() {}

    getUser():Observable<any>  {
        return new Observable(obs =>  {
            firebase.auth().onAuthStateChanged(authData =>  {                 
                 let authUser; 
                 if (authData) {
                    authUser = new User(authData);
                    this.user = authUser;
                 }
                 obs.next(authUser); 
            })
        });
    }
  

    login(userName:string, password:string):Promise <any>  {
        const promise = new Promise((resolve, reject) =>  {
            firebase.auth().signInWithEmailAndPassword(userName, password)
            .then(authData =>  {
                console.log(authData); 
                const user = new User(authData);
                this.user = user;
                resolve(user); 
            })
            .catch(function (error) {
              console.log(error); 
              reject(error); 
            }); 
        })
        
        return promise; 
    }

    register(email:string, password:string, country?:string, birthday?:Date):Promise<any>  {
        const promise = new Promise < any > ((resolve, reject) =>  {
            firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(data => resolve(data))
            .catch(function (error) {
                console.log(error); 
                reject(error); 
            }); 
        }); 
        return promise; 
    }
    
    logout() {
        firebase.auth().signOut();
    }
}