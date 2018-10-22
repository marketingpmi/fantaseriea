import { Pipe, PipeTransform } from '@angular/core';
import * as firebase from 'firebase';
import {AngularFirestore} from 'angularfire2/firestore';
import {Observable} from 'rxjs';

@Pipe({
  name: 'getPhotoUrlFromName'
})
export class GetPhotoUrlFromNamePipe implements PipeTransform {

    private storage: firebase.storage.Storage;
    private ref: firebase.storage.Reference;
    private utente: any;
    private user: Observable<any>;
    private users: Observable<any[]>;

    constructor(private db: AngularFirestore) {
        this.storage = firebase.storage();
        this.ref = this.storage.ref();
        this.users = this.db.collection('users').valueChanges();
    }

    getUrl(photoUrl) {
        return firebase.storage().ref(photoUrl).getDownloadURL().then((newValue) => {
        console.log("valore nuovo => "+ newValue);
        return newValue;
      })
      .catch(function(error){
          console.error('Error while convert => '+error);
      });
    }

    transform(value: any): any {
      console.log("value => " + value);
        return this.users.subscribe((utenti) => {
            for ( let user of utenti ) {
                console.log("user.id => "+user.id);
                if (user.id == value) {
                    return this.getUrl(user.photoUrl);
                }
            }
        });
    }

}
