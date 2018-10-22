import {AuthService} from '../services/auth.service';
import {Observable} from 'rxjs';
import * as firebase from 'firebase';

export interface Roles {
    admin?: boolean,
    user?: boolean;
}

export class User {
    name: string;
    email: string;
    phoneNumber: string;
    photoURL: string;
    uid: any;
    token: any;
    role: any;

    constructor(private user: any | void) {
        if (user.role === '') { this.user.role = 'user'; }
    }

    public getName(): string { return this.name; }

    public getEmail(): string { return this.email; }

    public getPhoneNumber(): string { return this.phoneNumber; }

    public getPhotoUrl(): string { return this.photoURL; }

    public getUid(): string { return this.uid; }

    public getToken(): string { return this.token; }

    public getRole(): any { return this.role; };

}
