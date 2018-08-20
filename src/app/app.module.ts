
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponent } from './/app-routing.module';
import {RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';


import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TableComponent } from './table/table.component';
import { WgPartiteGiornataComponent } from './wg-partite-giornata/wg-partite-giornata.component';
import { WgClassificaComponent } from './wg-classifica/wg-classifica.component';

import {LoginComponent} from "./login/login.component";
import {DashboardComponent} from './dashboard/dashboard.component';


@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
      FormsModule,
    BrowserAnimationsModule,
      AngularFireModule.initializeApp(environment.firebase),
      AngularFireDatabaseModule,
      AngularFireAuthModule
  ],
  declarations: [
    AppComponent,
      LoginComponent,
    routingComponent,
    HeaderComponent,
    FooterComponent,
    TableComponent,
    WgPartiteGiornataComponent,
    WgClassificaComponent,
    DashboardComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
