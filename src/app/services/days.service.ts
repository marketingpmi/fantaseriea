import { Injectable } from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import {Observable, of, Subscription} from 'rxjs';
import {AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';
import {NgForm} from '@angular/forms';
import {forEach} from '@angular/router/src/utils/collection';

class Partita {
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
export class DaysService {
    giornateList: Observable<any[]>;
    stagioni: Observable<any[]>;
    squadre: Observable<any[]>;
    private daysList: any;
    private day: { giornata: { giornata: any | string | { giornata: any | string; data: any; time: any; stagione: string | any; squadra1: any; squadra2: any; q1: any; qx: any; q2: any; view: boolean; edit: boolean } | null; data: any; time: any; stagione: string | any | any[]; squadra1: string | any | any[]; squadra2: string | any | any[]; q1: string | any | null; qx: string | any | null; q2: string | any | null; view: boolean; edit: boolean; id: string } | any | string | { giornata: any | string; data: any; time: any; stagione: string | any; squadra1: any; squadra2: any; q1: any; qx: any; q2: any; view: boolean; edit: boolean } | null; data: any; time: any; stagione: any; squadra1: string | any | any[]; squadra2: string | any | any[]; q1: string | any | null; qx: string | any | null; q2: string | any | null; view: boolean; edit: boolean; id: string };
    private giornata: any;


    constructor(private db: AngularFirestore) {
        //this.giornateList = this.db.list('/matches').valueChanges();
        this.stagioni = this.db.collection('stagioni').valueChanges();
        this.squadre = this.db.collection('squadre').valueChanges();
        console.dir("service stagioni "+this.stagioni);
    }

    getDays(): Observable<any[]> {
        this.giornateList = this.db.collection('matches').valueChanges();
        console.dir(JSON.stringify(this.giornateList));
        return this.giornateList;
    }

    getDay(g: string): Observable<any[]> {
        this.giornateList = this.db.collection('matches', ref => ref.where('giornata', '==', g)).valueChanges()
        this.giornateList.subscribe(res => console.log("lista giornate => "+JSON.stringify(res)));
        return this.giornateList;
    }

    addDay(form: NgForm): boolean {
        console.dir(JSON.stringify(form.value));
        this.daysList = this.db.collection('matches');
        let flag = false;
        this.giornata.push ({
                giornata: form.value.giornata,
                data: form.value.data_1,
                time: form.value.time_1,
                stagione: form.value.stagione,
                squadra1: form.value.squadra1_1,
                squadra2: form.value.squadra2_1,
                q1: form.value.q1_1,
                qx: form.value.qx_1,
                q2: form.value.q2_1,
                view: true,
                edit: false,
                id : "match-0-day-" + form.value.giornata
            });
            this.giornata.push({
                giornata: form.value.giornata,
                data: form.value.data_2,
                time: form.value.time_2,
                stagione: form.value.stagione,
                squadra1: form.value.squadra1_2,
                squadra2: form.value.squadra2_2,
                q1: form.value.q1_2,
                qx: form.value.qx_2,
                q2: form.value.q2_2,
                view: true,
                edit: false,
                id : "match-1-day-" + form.value.giornata
            });
        this.giornata.push({
                giornata: form.value.giornata,
                data: form.value.data_3,
                time: form.value.time_3,
                stagione: form.value.stagione,
                squadra1: form.value.squadra1_3,
                squadra2: form.value.squadra2_3,
                q1: form.value.q1_3,
                qx: form.value.qx_3,
                q2: form.value.q2_3,
                view: true,
                edit: false,
                id : "match-2-day-" + form.value.giornata
            });
        this.giornata.push({
                giornata: form.value.giornata,
                data: form.value.data_4,
                time: form.value.time_4,
                stagione: form.value.stagione,
                squadra1: form.value.squadra1_4,
                squadra2: form.value.squadra2_4,
                q1: form.value.q1_4,
                qx: form.value.qx_4,
                q2: form.value.q2_4,
                view: true,
                edit: false,
                id : "match-3-day-" + form.value.giornata
            });
        this.giornata.push({
                giornata: form.value.giornata,
                data: form.value.data_5,
                time: form.value.time_5,
                stagione: form.value.stagione,
                squadra1: form.value.squadra1_5,
                squadra2: form.value.squadra2_5,
                q1: form.value.q1_5,
                qx: form.value.qx_5,
                q2: form.value.q2_5,
                view: true,
                edit: false,
                id : "match-4-day-" + form.value.giornata
            });
        this.giornata.push({
                giornata: form.value.giornata,
                data: form.value.data_6,
                time: form.value.time_6,
                stagione: form.value.stagione,
                squadra1: form.value.squadra1_6,
                squadra2: form.value.squadra2_6,
                q1: form.value.q1_6,
                qx: form.value.qx_6,
                q2: form.value.q2_6,
                view: true,
                edit: false,
                id : "match-5-day-" + form.value.giornata
            });
        this.giornata.push({
                giornata: form.value.giornata,
                data: form.value.data_7,
                time: form.value.time_7,
                stagione: form.value.stagione,
                squadra1: form.value.squadra1_7,
                squadra2: form.value.squadra2_7,
                q1: form.value.q1_7,
                qx: form.value.qx_7,
                q2: form.value.q2_7,
                view: true,
                edit: false,
                id : "match-6-day-" + form.value.giornata
            });
        this.giornata.push({
                giornata: form.value.giornata,
                data: form.value.data_8,
                time: form.value.time_8,
                stagione: form.value.stagione,
                squadra1: form.value.squadra1_8,
                squadra2: form.value.squadra2_8,
                q1: form.value.q1_8,
                qx: form.value.qx_8,
                q2: form.value.q2_8,
                view: true,
                edit: false,
                id : "match-7-day-" + form.value.giornata
            });
        this.giornata.push({
                giornata: form.value.giornata,
                data: form.value.data_9,
                time: form.value.time_9,
                stagione: form.value.stagione,
                squadra1: form.value.squadra1_9,
                squadra2: form.value.squadra2_9,
                q1: form.value.q1_9,
                qx: form.value.qx_9,
                q2: form.value.q2_9,
                view: true,
                edit: false,
                id : "match-8-day-" + form.value.giornata
            })
        this.giornata.push({
                giornata: form.value.giornata,
                data: form.value.data_10,
                time: form.value.time_10,
                stagione: form.value.stagione,
                squadra1: form.value.squadra1_10,
                squadra2: form.value.squadra2_10,
                q1: form.value.q1_10,
                qx: form.value.qx_10,
                q2: form.value.q2_10,
                view: true,
                edit: false,
                id : "match-9-day-" + form.value.giornata
            });
        console.dir(JSON.stringify(this.giornata));
        for (let index in this.giornata) {
            let match = this.giornata[index];
            if ((match.squadra1 !== "")&&(match.squadra1 !== undefined)){
                let docMatch = "match-" + index+"-day-" + match.giornata;
                this.db.collection("matches").doc(docMatch).set(match)
                    .then(function(docRef) {
                        flag = true;
                    })
                    .catch(function(error) {
                       flag = false;
                    });
            }
        }
        return flag;
    }

    addSingleDay(form: NgForm): boolean {
        console.dir(JSON.stringify(form.value));
        this.daysList = this.db.collection('matches');
        let flag = true;
        this.day = {
            giornata: form.value.giornata,
            data: form.value.data,
            time: form.value.time,
            stagione: form.value.stagione,
            squadra1: form.value.squadra1,
            squadra2: form.value.squadra2,
            q1: form.value.q1,
            qx: form.value.qx,
            q2: form.value.q2,
            view: true,
            edit: false,
            id : "match-day_" + form.value.giornata+"-"+form.value.squadra1+"-"+form.value.squadra2
        };
        if ((this.day.squadra1 !== "") && (this.day.squadra1 !== undefined)) {
            this.db.collection("matches").doc(this.day.id).set(this.day, { merge: true })
                .then(function(docRef) {
                    flag = true;
                })
                .catch(function(error) {
                    flag = false;
                });
        }
        return flag;
    }

    updateSingleMatch(match) : boolean {
        let flag = false;
        match.view = true;
        match.edit = false;
        this.daysList = this.db.collection('matches').doc(match.id);
        return this.daysList.update(match)
            .then(function(docRef) {
                return true;
            })
            .catch(function(error) {
                return false;
            });
    }


    deleteSingleMatch(match): void {
        this.db.collection("matches").doc(match.id).delete()
            .then(function(docRef) {
                 return true;
             })
    }
}
