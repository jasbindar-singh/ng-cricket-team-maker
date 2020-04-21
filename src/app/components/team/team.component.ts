import { Component, OnInit } from '@angular/core';
import { TeamService } from '../../services/team.service';
import { Player } from '../../class/player';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.sass']
})
export class TeamComponent implements OnInit {

  public teamList$:Observable<Player[]>;

  constructor(public team: TeamService, public router: Router) {
  }

  ngOnInit() {
    this.teamList$ = this.team.getTeamList()
    // this.team.getTeamList().subscribe(newTeam => {
    //   this.teamList = newTeam
    // })
  }

  handlePlayerDelete(index:number, player:Player){
    this.team.removeTeamMember(index);
    alert(`Removed: ${player.name}`);
    this.router.navigate(['/team']);
  }

  display(index){
    this.router.navigate(['/team', index]);
  }

}
