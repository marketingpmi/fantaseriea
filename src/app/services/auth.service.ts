import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Router } from "@angular/router";

import { Observable, of } from 'rxjs';
import {AngularFireDatabase} from 'angularfire2/database';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
     authenticated: any;

    constructor(private afAuth: AngularFireAuth,
                private db: AngularFireDatabase,
                private router:Router) {

        this.afAuth.authState.subscribe((auth) => {
            this.authenticated = auth;
        });
    }

    // Returns true if user is logged in
    getLogged(): any {
        return this.afAuth.authState
            .take(1)
            .map(user => !!user)
            .do(loggedIn => {
                if (!loggedIn) {
                    return false;
                } else {
                    return true;
                }
            });
    }

    // Returns current user data
    get currentUser(): any {
        return this.authenticated ? this.authenticated : null;
    }

    login(email: string, password: string) {
        return this.afAuth.auth.signInWithEmailAndPassword(email, password)
            .then((user) => {
                this.authenticated = user;
                alert('Login effettuato con successo!');
                //this.updateUserData()
                return;
            })
            .catch(error => alert('ERRORE DI LOGIN => ' + error.message));
    }



    logout() {
        return this.afAuth.auth.signOut()
            .then((res) => {
                this.authenticated = null;
                alert ("Logout effettuato con successo!");
                this.router.navigate(['/login']);
            });
    }

}
