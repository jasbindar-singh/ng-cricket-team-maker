import { Component, OnInit, Input } from '@angular/core';
import { TeamService } from '../../services/team.service';

@Component({
  selector: 'app-add-to-team',
  templateUrl: './add-to-team.component.html',
  styleUrls: ['./add-to-team.component.sass']
})
export class AddToTeamComponent implements OnInit {

  @Input('player') player;

  constructor(private team: TeamService) { }

  ngOnInit() {
  }

  handleClick():void{
    this.team.addTeamMember(this.player)
  }

}
