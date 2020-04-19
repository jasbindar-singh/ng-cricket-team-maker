import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayersComponent } from './players/players.component';
import { LoginComponent } from './login/login.component';
import { TeamComponent } from './team/team.component';
import { HomeComponent } from './home/home.component';
import { MatchScheduleComponent } from './match-schedule/match-schedule.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PlayerDetailComponent } from './player-detail/player-detail.component';


const routes: Routes = [
  {path: '', redirectTo:"login", pathMatch:"full" },
  {path: "home", component: HomeComponent},
  {path: "players", component: PlayersComponent},
  {path: "login", component: LoginComponent},
  {
    path: "team",
    component: TeamComponent,
    children:[{
      path:':id',
      component: PlayerDetailComponent
    }]
  },
  {path: "match-schedule", component: MatchScheduleComponent},
  {path: "**", component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
