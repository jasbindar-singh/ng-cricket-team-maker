import { Component, OnInit } from '@angular/core';
import { PlayersService } from '../../services/players.service';
import { Player } from '../../class/player';
import { AuthService } from '../../services/auth.service';
import { TeamService } from '../../services/team.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.sass']
})
export class PlayersComponent implements OnInit {

  public playerList:Observable<Player[]>;
  public user:string;

  constructor(private playerListService: PlayersService, private auth: AuthService, private team: TeamService) {

  }

  ngOnInit() {
    this.playerList = this.playerListService.getPlayerList();
    // this.playerList = this.playerListService.getPlayerList()
    this.auth.getUser().subscribe(newUser => {
      this.user = newUser
    })
  }

  isAdmin():boolean{
    if(this.user === "admin")
      return true;
    else
      return false;
  }

  showDetails(player){
    alert(`
      Player Details :-
      Name: ${player.name}
      Position: ${player.position}
    `);
  }

}
