import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClassificationService {
    private player: any;
    private daysList: AngularFirestoreDocument<any>;
    private classifica: Observable<any[]>;
    //users: Observable<any[]>;
    
    constructor(private db: AngularFirestore) {
        //this.giornateList = this.db.list('/matches').valueChanges();
    }

    getClassifica(order) {
        this.classifica = this.db.collection('classifica', ref => ref.orderBy("punti", order)).valueChanges();
        this.classifica.subscribe(res => console.log("classifica => "+JSON.stringify(res)));
        //this.users = this.db.collection('users').valueChanges();
        return this.classifica;
    }

    updateGiocatore(element):boolean {
        let flag = false;
        element.view = true;
        element.edit = false;
        this.player = this.db.collection('classifica').doc(element.id);
        return this.player.update(element)
            .then(function(docRef) {
                return true;
            })
            .catch(function(error) {
                return false;
            });
    }
}

