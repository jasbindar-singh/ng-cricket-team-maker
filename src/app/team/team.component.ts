import { Component, OnInit } from '@angular/core';
import { TeamService } from '../team.service';
import { Player } from '../player';
import { Router } from '@angular/router';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.sass']
})
export class TeamComponent implements OnInit {

  public teamList:Player[];

  constructor(public team: TeamService, public router: Router) {
    this.teamList = new Array<Player>();
  }

  ngOnInit() {
    this.team.getTeamList().subscribe(newTeam => {
      this.teamList = newTeam
    })
  }

  handlePlayerDelete(index:number, player:Player){
    this.team.removeTeamMember(index);
    alert(`Removed: ${player.name}`)
  }

  display(index){
    this.router.navigate(['/team', index]);
  }

}
