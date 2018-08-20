import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import {Observable, of} from 'rxjs';
import {User} from '../models/user';
import {Router} from '@angular/router';
import {AngularFireAuth} from 'angularfire2/auth';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public isLogged: Observable<boolean>;
    router: Router;

      constructor(public afAuth: AngularFireAuth, router: Router, private authService: AuthService) {
      }

  ngOnInit() {
      this.afAuth.authState.subscribe(user => {
          if (user != null) {
              this.isLogged = of(true);
          } else {
              this.isLogged = of(false);
          }
          alert ('header isLogged -> ' + JSON.stringify(this.isLogged));
      });
  }

  logout() {
      this.authService.logout ().then(value => {
          this.isLogged = of(false);
          alert ("Logout effettuato con successo!");
          this.router.navigate['/login'];
      });
  }


}
