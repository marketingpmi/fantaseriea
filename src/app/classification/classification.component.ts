import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import {DaysService} from '../services/days.service';
import {ClassificationService} from '../services/classification.service';
import {T} from '@angular/core/src/render3';
import {Observable} from 'rxjs';
import {AngularFirestoreCollection} from 'angularfire2/firestore';

@Component({
  selector: 'app-classification',
  templateUrl: './classification.component.html',
  styleUrls: ['./classification.component.css']
})
export class ClassificationComponent implements OnInit {
    private view: boolean;
    private edit: boolean;
    private elementSel: any;
    classifica: Observable<any[]>;

    constructor(private af: AuthService, private classification: ClassificationService) {
    }

    ngOnInit() {
        this.view = true;
        this.edit = false;

        this.classifica = this.classification.getClassifica('desc');
    }

    editItem(element) {
        this.elementSel = element;
        element.view = false;
        element.edit = true;
        this.view = false;
        this.edit = true;
    }

    getElement() {
        return this.elementSel;
    }

    viewMode(element) {
        this.classifica = this.classification.getClassifica('desc');

        this.elementSel = element;
        element.view = true;
        element.edit = false;
        this.view = true;
        this.edit = false;


    }

    saveItem(element) {
        console.dir(element);
        element.edit = false;
        element.view = true;
        /* SAVE ELEMENT */
        let flag = this.classification.updateGiocatore(element);
        if (!flag) {
            alert ("Attenzione! Problemi nella modifica. ");
        } else {
            alert ("Modifica avvenuta correttamente");
        }
        /* SHOW ELEMENT UPDATED */
        this.viewMode(element);
    }


}
