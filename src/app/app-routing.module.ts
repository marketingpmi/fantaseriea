import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from "@angular/router";


import {ClassificationComponent} from "./classification/classification.component";
import {LoginComponent} from "./login/login.component";
import {ProfileComponent} from "./profile/profile.component";
import {PronosticoComponent} from "./pronostico/pronostico.component";

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'pronostico', component: PronosticoComponent},
  {path: 'classification', component: ClassificationComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class AppRoutingModule { }
export const routingComponent = [ LoginComponent,ProfileComponent,PronosticoComponent,ClassificationComponent ]
