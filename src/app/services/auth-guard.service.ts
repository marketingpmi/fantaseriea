import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {AuthService} from './auth.service';
import {Observable,of} from 'rxjs';
import 'rxjs-compat/add/operator/take';
import 'rxjs-compat/add/operator/map';
import 'rxjs-compat/add/operator/do';
import {AngularFireAuth} from 'angularfire2/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    isLogged: boolean;
    router: Router;

    constructor(public afAuth: AngularFireAuth, router: Router, private authService: AuthService) {
        this.isLogged = false;
    }

    OnInit() {
        this.afAuth.authState.subscribe(user => {
            if (user != null) {
                this.isLogged = true;
            } else {
                this.isLogged = false;
            }
            alert ('header isLogged -> ' + JSON.stringify(this.isLogged));
        });
    }

    /*canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | boolean {
        alert(this.authService.authenticated);
        if (this.authService.authenticated) { return true; }

        this.router.navigate(['login']);
        return false;
    }*/

    canActivate(): Observable<boolean> {
        alert ('canActivate isLogged -> ' + this.isLogged);
        if (this.isLogged === true) {
            return of(true);
        } else {
            return of(false);
            this.router.navigate(['/login']);
        }
    }

}

