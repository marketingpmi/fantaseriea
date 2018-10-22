import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from "@angular/router";

import { Observable, of } from 'rxjs';
import {AngularFireDatabase} from 'angularfire2/database';
import { switchMap } from 'rxjs/operators';
import {AngularFirestore} from 'angularfire2/firestore';
import 'rxjs-compat/add/operator/switchMap';
import 'rxjs-compat/add/observable/of';
import { auth } from 'firebase/app';
import {User} from '../models/user';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
     authenticated: any;
    private isAdminLogged: Observable<boolean>;
    user: User;

    constructor(private afAuth: AngularFireAuth,
                private db: AngularFireDatabase,
                private afs: AngularFirestore,
                private router: Router) {

        this.afAuth.authState.subscribe((auth) => {
            this.authenticated = auth;
        });

        this.isAdminLogged = this.afAuth.authState
            .switchMap(user => {
                if (user) {
                    if (user.uid === 'AZ99xQXWA1aC6AabPwDWVyljNdC2') {
                        return Observable.of(true);
                    } else {
                        return Observable.of(false);
                    }
                } else {
                    return Observable.of(false);
                }
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
        return this.loginEmail(email, password).then((user) => {
            //this.user = new User(user);
        });
        //return this.loginFacebook();
    }


    loginEmail(email: string, password: string) {
        return this.afAuth.auth.signInWithEmailAndPassword(email, password)
            .then((user) => {
                this.authenticated = user;
                alert('Login effettuato con successo!');
                //this.updateUserData()
                return;
            })
            .catch(error => alert('ERRORE DI LOGIN => ' + error.message));
    }

    loginFacebook() {
        // Sign in using a popup.
        let provider = new auth.FacebookAuthProvider();
        provider.addScope('user_birthday');
        return this.afAuth.auth.signInWithPopup(provider).then(function(result) {
            // This gives you a Facebook Access Token.
            var token = result.user.getIdTokenResult();
            // The signed-in user info.
            var user = result.user;
            alert('Login effettuato con successo!');
        }).catch(error => alert('ERRORE DI LOGIN => ' + error.message));
    }



    logout() {
        return this.afAuth.auth.signOut()
            .then((res) => {
                this.authenticated = null;
                alert ("Logout effettuato con successo!");
                this.router.navigate(['/login']);
            });
    }

    getAdminLogged() {
        return this.isAdminLogged;
    }
}
