///<reference path="../../../node_modules/@angular/core/src/metadata/directives.d.ts"/>
import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

    @Input() model: string;
    @Input() config: string;
    @Input() data: string;


  constructor() {
      console.dir(this.data);
  }

  ngOnInit() {
  }

    keys(): Array<string> {
      console.log (this.data);
        return Object.values(this.data);
    }

}
