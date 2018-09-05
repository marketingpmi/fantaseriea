import { Component, OnInit } from '@angular/core';
import { TableComponent } from '../table/table.component';
import {FirebaseListObservable} from 'angularfire2/database-deprecated';
import {GiornateService} from '../services/giornate.service';
import {Observable} from 'rxjs';

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

@Component({
  selector: 'app-giornata',
  templateUrl: './giornata.component.html',
  styleUrls: ['./giornata.component.css']
})
export class GiornataComponent implements OnInit {
     _model: { name: string }[];
     _config: {}[];

    public partite: FirebaseListObservable<Partita[]>;
    _data: Observable<any[]>;

  constructor(private giornateService: GiornateService) { }

  loadData() {
      this._data = this.giornateService.getList();
  }



  ngOnInit() {
      this._model = [
          {name: 'Fase'},
          {name: 'Stagione'},
          {name: 'Data'},
          {name: 'Squadra 1'},
          {name: ''},
          {name: 'Squadra 2'},
          {name: 'Q.1'},
          {name: 'Q.X'},
          {name: 'Q.2'},
          {name: 'Giocatore 1'},
          {name: ''},
          {name: 'Giocatore 2'}
      ];
      this._config = [
          {}
      ];
      this.loadData();
  }


}
