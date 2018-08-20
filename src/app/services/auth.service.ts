import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Router } from "@angular/router";

import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
    user: Observable<firebase.User>;
    private utente: firebase.User;
    authState: any = null;
    router: Router;



    getLogged(): any {
        return this.authState;
    }



    constructor(public afAuth: AngularFireAuth, router: Router) {
        // this.authState = this.afAuth.authState;
        this.afAuth.authState.subscribe(user => {
            if (user) {
                this.authState = user;
            } else {
                this.authState = null;
            }
        });
    }

    signup(email: string, password: string) {
        this.afAuth
            .auth
            .createUserWithEmailAndPassword(email, password)
            .then(value => {
                alert ('Signin effettuato con successo!');
            })
            .catch(err => {
                alert ('ERRORE DI SIGNIN => '+err.message);
            });
    }

    login(email: string, password: string) {
        return this.afAuth.auth.signInWithEmailAndPassword(email, password)
            .then((user) => {
                this.authState = user
                alert('Login effettuato con successo!');
                //this.updateUserData()
                return;
            })
            .catch(error => alert('ERRORE DI LOGIN => ' + error.message));
    }



    logout() {
        return this.afAuth.auth.signOut()
            .then((res) => {
            });
    }

}
