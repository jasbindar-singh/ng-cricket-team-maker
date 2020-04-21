import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayersComponent } from './components/players/players.component';
import { LoginComponent } from './components/login/login.component';
import { TeamComponent } from './components/team/team.component';
import { HomeComponent } from './components/home/home.component';
import { MatchScheduleComponent } from './components/match-schedule/match-schedule.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PlayerDetailComponent } from './components/player-detail/player-detail.component';


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
