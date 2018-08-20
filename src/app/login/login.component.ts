import {Component, Injectable, OnInit} from '@angular/core';
import * as firebase from 'firebase/app';
import {AuthService} from '../services/auth.service';
import {Observable,of} from 'rxjs';
import {User} from '../models/user';
import {Router} from '@angular/router';

import { HeaderComponent} from '../header/header.component';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
    email: string;
    password: string;
    userLogin: Observable<any>;
    user: User;

    constructor(private AuthService : AuthService, private router: Router ) {}

    login() {
        this.AuthService.login (this.email, this.password).then(value => {
            this.router.navigate(['dashboard']);
        });
    }

    ngOnInit() {

    }



}