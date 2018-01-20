import {Observable}from 'rxjs/observable'; 
import {IUser}from '../models/iuser'; 
import {User}from '../models/user'; 
import {Injectable }from '@angular/core'; 

declare var firebase:any; 

@Injectable()
export class UserService {
    firebaseUrl:string = 'https://mytunesvivek.firebaseio.com';
    constructor() {}

    getUser():User {
        let authData = firebase.auth().currentUser; 
        let user:User; 
        if (authData) {
            user = new User(authData); 
        }
        return user; 
    }

    login(userName:string, password:string):User {
        let user:User; 
        firebase.auth().signInWithEmailAndPassword(userName, password)
        .then(authData => {
            console.log(authData);
            user = new User(authData)
        })
        .catch(function (error) {
          console.log(error); 
        }); 
        return user; 
    }

    register(email:string, password:string, country?:string, birthday?:Date):any {
        let authData;
        console.log(email);
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(data=>authData=data)
        .catch(function (error) {
            console.log(error); 
        });

        return authData;
    }
    
    logout() {
        firebase.auth().signOut();
    }
}