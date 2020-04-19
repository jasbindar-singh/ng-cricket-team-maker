import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { PlayersComponent } from './players/players.component';
import { TeamComponent } from './team/team.component';
import { MatchScheduleComponent } from './match-schedule/match-schedule.component';
import { FormsModule } from '@angular/forms';
import { AddToTeamComponent } from './add-to-team/add-to-team.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PlayerDetailComponent } from './player-detail/player-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    LoginComponent,
    HeaderComponent,
    PlayersComponent,
    TeamComponent,
    MatchScheduleComponent,
    AddToTeamComponent,
    PageNotFoundComponent,
    PlayerDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
