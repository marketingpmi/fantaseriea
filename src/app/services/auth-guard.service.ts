import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {AuthService} from './auth.service';
import {Observable,of} from 'rxjs';
import 'rxjs-compat/add/operator/take';
import 'rxjs-compat/add/operator/map';
import 'rxjs-compat/add/operator/do';
import {AngularFireAuth} from 'angularfire2/auth';
import 'rxjs-compat/add/observable/from';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(private afAuth: AngularFireAuth, private router: Router) {}


    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> {

        return this.afAuth.authState
            .take(1)
            .map(user => !!user)
            .do(loggedIn => {
                if (!loggedIn) {
                    console.log ("access denied")
                    this.router.navigate(['/login']);
                }
            });
    }

}

