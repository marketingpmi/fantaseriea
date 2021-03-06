import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';
import {AngularFireAuth} from 'angularfire2/auth';
import {AuthGuard} from '../services/auth-guard.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public isLogged: boolean;
    private isAdminLogged: boolean;

      constructor(public afAuth: AngularFireAuth, private router: Router, private authService: AuthService, private guard: AuthGuard) {
      }

  ngOnInit() {
      this.authService.getLogged().subscribe((auth) => {
          console.log(' this.authService.getLogged -> ' + auth);
          this.isLogged = auth;
      });
      this.authService.getAdminLogged().subscribe((auth) => {
          this.isAdminLogged = auth;
      });
  }

  logout() {
      this.authService.logout ().then(value => {
          this.isLogged = false;
      });
  }


}
