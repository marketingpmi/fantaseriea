
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
import {AngularFirestore, AngularFirestoreModule} from 'angularfire2/firestore';
import { environment } from '../environments/environment';


import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TableComponent } from './table/table.component';
import { WgPartiteGiornataComponent } from './wg-partite-giornata/wg-partite-giornata.component';
import { WgClassificaComponent } from './wg-classifica/wg-classifica.component';

import {LoginComponent} from "./login/login.component";
import {DashboardComponent} from './dashboard/dashboard.component';

import {AngularMaterialModule} from './angular-material/angular-material.module';
import {MapToIterable} from './table/map-to-iterable.pipe';
import { InsertDayComponent } from './admin/insert-giornata/insert-day.component';


import {DateValueAccessorModule} from 'angular-date-value-accessor';
import { GiornataFormComponent } from './giornata-form/giornata-form.component';
import { SingleDayComponent } from './giornata-singola/single-day.component';
import { ClassificationComponent } from './classification/classification.component';

import { HttpClientModule } from '@angular/common/http';
import { UsersComponent } from './users/users.component';
import { ConvertPhotoUrlPipe } from './pipe/convert-photo-url.pipe';
import { GetPhotoUrlFromNamePipe } from './pipe/get-photo-url-from-name.pipe';


@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
      FormsModule,
    BrowserAnimationsModule,
      AngularFireModule.initializeApp(environment.firebase),
      AngularFireDatabaseModule,
      AngularFireAuthModule,
      AngularMaterialModule,
      AngularFirestoreModule,
      DateValueAccessorModule,
      HttpClientModule
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
    DashboardComponent,
    MapToIterable,
    InsertDayComponent,
    GiornataFormComponent,
    SingleDayComponent,
    ClassificationComponent,
    UsersComponent,
    ConvertPhotoUrlPipe,
    GetPhotoUrlFromNamePipe
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }