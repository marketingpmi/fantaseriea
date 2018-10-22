import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import {DaysService} from '../../services/days.service';
import {AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';

@Component({
  selector: 'app-insert-giornata',
  templateUrl: './insert-day.component.html',
  styleUrls: ['./insert-day.component.css']
})
export class InsertDayComponent implements OnInit {
    stagioni: any[];
    stagione: string;
    private form: any;
    private giornateList: AngularFirestoreCollection<any>;
   squadre: any[];
    private giornata: { giornata: any | string; data: any; time: any; stagione: string | any; squadra1: any; squadra2: any; q1: any; qx: any; q2: any, view: boolean, edit: boolean };
    private flag: boolean;

    constructor(private giornateService: DaysService, private db: AngularFirestore) {
        this.giornateList = this.db.collection('matches');
    }


  ngOnInit() {
      this.giornateService.stagioni.subscribe((stagioni) => {
          this.stagioni = stagioni;
      });
      this.giornateService.squadre.subscribe((squadre) => {
          this.squadre = squadre;
      });
  }

    addDay(form: NgForm) {
        if (form.invalid) {
            alert("Invalid form! Valorizza i campi correttamente");
            //return;
        }
        this.flag = this.giornateService.addSingleDay(form);
        if (!this.flag) {
            alert ("Attenzione! Problemi nell'inserimento. Probabilmente alcune partite non sono state inserite");
        } else {
            alert ("Inserimento avvenuto correttamente");
        }
    }
}
