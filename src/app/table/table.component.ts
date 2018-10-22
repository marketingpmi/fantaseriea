///<reference path="../../../node_modules/@angular/core/src/metadata/directives.d.ts"/>
import {Component, Input, OnInit} from '@angular/core';
import {MapToIterable} from './map-to-iterable.pipe';
import {AuthService} from '../services/auth.service';
import {DaysService} from '../services/days.service';

@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

    @Input() model: any;
    @Input() config: any;
    @Input() data: any[];
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


  constructor(private af: AuthService, private giornateService: DaysService) {
      console.dir(this.data);
      this.adminLogged = this.af.getAdminLogged();
  }

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
        element.view = false;
        element.edit = true;
        this.view = false;
        this.edit = true;

        this.stagione = element.stagione;
        this.datag = element.data;
        this.squadra1 = element.squadra1;
        this.squadra2 = element.squadra2;
        this.q1 = element.q1;
        this.qx = element.qx;
        this.q2 = element.q2;
      }

    viewMode(element) {
        this.view = true;
        this.edit = false;
        element.view = true;
        element.edit = false;
    }


    keys(): Array<string> {
        return Object.keys(this.data);
    }

}
