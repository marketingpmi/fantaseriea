import { Component, OnInit } from '@angular/core';
import { TableComponent } from '../table/table.component';
import {FirebaseListObservable} from 'angularfire2/database-deprecated';
import {DaysService} from '../services/days.service';
import {of,Observable} from 'rxjs';
import {forEach} from '@angular/router/src/utils/collection';

class Partita {
    stagione: string;
    data: string;
    squadra1: string;
    squadra2: string;
    q1: string;
    qx: string;
    q2: string;
}

@Component({
  selector: 'app-giornata',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.css']
})
export class DayComponent implements OnInit {
     _model: {}[];
     _config: any;

    public partite: FirebaseListObservable<Partita[]>;
    _data: Observable<any[]>;
     _giornata: string;
     _tipo: string;
     matches: number[];

  constructor(private giornateService: DaysService) { }

    keys(): Array<string> {
        return Object.keys(this._data);
    }

  loadData(giornata: string) {
      this._data = this.giornateService.getDay(giornata);
      //this._data = this.giornateService.getDays();
  }



  ngOnInit() {
      this._model = [
          {name: 'Stagione'},
          {name: 'Data'},
          {name: 'Squadra 1'},
          {name: ''},
          {name: 'Squadra 2'},
          {name: 'Q.1'},
          {name: 'Q.X'},
          {name: 'Q.2'}
      ];
      this._config = {delete: 'true', view: 'false', edit: 'true'};
      //this.loadData();
      this._tipo = 'giornata';

      this.matches = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38];
  }


    setDay(day: string) {
        this._giornata = day;
        this.loadData(this._giornata);
    }
}
