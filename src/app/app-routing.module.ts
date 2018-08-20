import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import {AuthGuard} from './services/auth-guard.service';


import {ClassificationComponent} from './classification/classification.component';
import {LoginComponent} from './login/login.component';
import {ProfileComponent} from './profile/profile.component';
import {PronosticoComponent} from './pronostico/pronostico.component';
import {GiornataComponent} from './giornata/giornata.component';
import {DashboardComponent} from './dashboard/dashboard.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
  {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
  {path: 'pronostico', component: PronosticoComponent, canActivate: [AuthGuard]},
  {path: 'classification', component: ClassificationComponent, canActivate: [AuthGuard]},
    {path: 'giornata', component: GiornataComponent, canActivate: [AuthGuard]},
    {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
    { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
export const routingComponent = [ LoginComponent, ProfileComponent, PronosticoComponent, ClassificationComponent, GiornataComponent ]
