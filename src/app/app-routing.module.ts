import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import {AuthGuard} from './services/auth-guard.service';


import {ClassificationComponent} from './classification/classification.component';
import {LoginComponent} from './login/login.component';
import {ProfileComponent} from './profile/profile.component';
import {PronosticoComponent} from './pronostico/pronostico.component';
import {DayComponent} from './giornata/day.component';
import {DashboardComponent} from './dashboard/dashboard.component';

import {InsertDayComponent} from './admin/insert-giornata/insert-day.component';
import {UsersComponent} from './users/users.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
  {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
  {path: 'pronostico', component: PronosticoComponent, canActivate: [AuthGuard]},
  {path: 'classification', component: ClassificationComponent, canActivate: [AuthGuard]},
    {path: 'giornata', component: DayComponent, canActivate: [AuthGuard]},
    {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
    { path: 'insertgiornata', component: InsertDayComponent, canActivate: [AuthGuard] },
    { path: 'users', component: UsersComponent, canActivate: [AuthGuard] },
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
export const routingComponent = [ LoginComponent, ProfileComponent, PronosticoComponent, ClassificationComponent, DayComponent ]
