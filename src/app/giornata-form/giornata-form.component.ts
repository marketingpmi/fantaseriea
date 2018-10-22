import {Component, Input, OnInit, SimpleChange, SimpleChanges} from '@angular/core';
import {DaysService} from '../services/days.service';

@Component({
  selector: 'app-giornata-form',
  templateUrl: './giornata-form.component.html',
  styleUrls: ['./giornata-form.component.css']
})
export class GiornataFormComponent implements OnInit {
    private stagioni: any[];
    private squadre: any[];

    @Input() elementSelected: any;
    private element: any;

  constructor(private giornateService: DaysService) {
      this.element = {
          giornata: null,
          data: null,
          time: null,
          stagione: this.stagioni,
          squadra1: this.squadre,
          squadra2: this.squadre,
          q1: null,
          qx: null,
          q2: null,
          view: true,
          edit: false
      };
  }


    ngOnChanges(changes: SimpleChanges) {
        const elementSelected = changes.elementSelected;
        console.log('prev value: ', elementSelected.previousValue);
        console.log('got name: ', elementSelected.currentValue);
        if (elementSelected.firstChange !== true) {
            this.element = elementSelected.currentValue;
        }
    }


  ngOnInit() {
      this.giornateService.stagioni.subscribe((stagioni) => {
          this.stagioni = stagioni;
      });
      this.giornateService.squadre.subscribe((squadre) => {
          this.squadre = squadre;
      });
  }


}
