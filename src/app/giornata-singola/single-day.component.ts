import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {AuthService} from '../services/auth.service';
import {DaysService} from '../services/days.service';

@Component({
  selector: 'app-giornata-singola',
  templateUrl: './single-day.component.html',
  styleUrls: ['./single-day.component.css']
})
export class SingleDayComponent implements OnInit {

  @Input() data: Observable<any[]>;
    @Input() config: any;
    @Input() model: any;
    @Input() tipo: string;
    @Input() giornata: string;
    private adminLogged: any;
    private stagioni: any[];
    private squadre: any[];
    view: boolean;
    edit: boolean;
    private stagione: any;
    private squadra1: string | any;
    private squadra2: any | string;
    private q1: any | string;
    private qx: any | string;
    private q2: string | any;
    private datag: Date;
     elementSel: any;

  constructor(private af: AuthService, private giornateService: DaysService) { }

  ngOnInit() {
      this.giornateService.stagioni.subscribe((stagioni) => {
          this.stagioni = stagioni;
      });
      this.giornateService.squadre.subscribe((squadre) => {
          this.squadre = squadre;
      });

      this.view = true;
      this.edit = false;
  }

    editItem(element) {
        this.elementSel = element;
        element.view = false;
        element.edit = true;
        this.view = false;
        this.edit = true;

        console.log("element.edit => "+element.edit);
        console.log("element.squadra1 => "+element.squadra1);
    }

    getElement() {
      return this.elementSel;
    }

    viewMode(element) {
        this.giornateService.stagioni.subscribe((stagioni) => {
            this.stagioni = stagioni;
        });
        this.giornateService.squadre.subscribe((squadre) => {
            this.squadre = squadre;
        });

        this.elementSel = element;
        element.view = true;
        element.edit = false;
        this.view = true;
        this.edit = false;


    }

    saveGiornata(element) {
      console.dir(element);
      element.edit = false;
      element.view = true;
      /* SAVE ELEMENT */
       let flag = this.giornateService.updateSingleMatch(element);
        if (!flag) {
            alert ("Attenzione! Problemi nella modifica. ");
        } else {
            alert ("Modifica avvenuta correttamente");
        }
      /* SHOW ELEMENT UPDATED */
      this.viewMode(element);
    }

    deleteItem(element) {
        /* SAVE ELEMENT */
        this.giornateService.deleteSingleMatch(element);
    }

}
