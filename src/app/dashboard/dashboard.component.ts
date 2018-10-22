import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    private dato: Observable<any>;

  constructor(private http: HttpClient) { }

  ngOnInit() {
      //this.dato = this.http.get("https://us-central1-fantaseriea-4f79f.cloudfunctions.net/helloWorld");
      //console.log (JSON.stringify(this.dato));
  }
  

}
