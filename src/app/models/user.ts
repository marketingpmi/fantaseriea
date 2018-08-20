import {AuthService} from '../services/auth.service';
import {Observable} from 'rxjs';
import * as firebase from 'firebase';

export class User {
    name: string;
    email: string;
    phoneNumber: string;
    photoURL: string;
    uid: any;
    token: any;

    constructor(private user: firebase.User) {
        this.name = user.displayName;
        this.email= user.email;
        this.phoneNumber = user.phoneNumber;
        this.photoURL = user.photoURL;
        this.uid = user.uid;
    }

    public getName(): string { return this.name; }

    public getEmail(): string { return this.email; }

    public getPhoneNumber(): string { return this.phoneNumber; }

    public getPhotoUrl(): string { return this.photoURL; }

    public getUid(): string { return this.uid; }

    public getToken(): string { return this.token; }

}
