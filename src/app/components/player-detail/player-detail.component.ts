import { Component, OnInit } from '@angular/core';
import { TeamService } from '../../services/team.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-player-detail',
  templateUrl: './player-detail.component.html',
  styleUrls: ['./player-detail.component.sass']
})
export class PlayerDetailComponent implements OnInit {

  public player;
  public teamList;

  constructor(private team: TeamService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.team.getTeamList().subscribe(newData => {
      this.teamList = newData
    })

    this.route.params.subscribe(parameters => {
        this.player = this.teamList[parseInt(parameters['id'])];
    })
  }
}
