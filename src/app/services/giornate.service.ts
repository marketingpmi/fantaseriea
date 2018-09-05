import { Injectable } from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import {Observable, Subscription} from 'rxjs';

class Partita {
    fase: string;
    stagione: string;
    data: string;
    squadra1: string;
    squadra2: string;
    q1: string;
    qx: string;
    q2: string;
    g1: string;
    g2: string
}
@Injectable({
    providedIn: 'root'
})
export class GiornateService {
    private list: Observable<any[]>;


    constructor(private db: AngularFireDatabase) {
        this.list = this.db.list('/giornate').valueChanges();
    }

    getList(): Observable<any[]> {
      console.dir(this.list);
      return this.list;
    }



}
