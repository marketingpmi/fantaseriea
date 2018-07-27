import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponent } from './/app-routing.module';
import {RouterModule} from "@angular/router";
import { AppComponent } from './app.component';

import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  declarations: [
    AppComponent,
    routingComponent,
    HeaderComponent,
    FooterComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
