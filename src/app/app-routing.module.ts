import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { IndiaComponent } from './india/india.component';
import { PakComponent } from './pak/pak.component';
import { TeamDetailsComponent } from './teams/team-details/team-details.component';
import { TeamsComponent } from './teams/teams.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},

  {
    path:'teams',component:TeamsComponent,
 children: [{path:'india', component:IndiaComponent},
  {path:'pak',component:PakComponent}]
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
