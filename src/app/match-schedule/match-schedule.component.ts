import { Component, OnInit } from '@angular/core';
import { MatchScheduleService } from '../match-schedule.service';
import { MatchSchedule } from '../match-schedule';

@Component({
  selector: 'app-match-schedule',
  templateUrl: './match-schedule.component.html',
  styleUrls: ['./match-schedule.component.sass']
})
export class MatchScheduleComponent implements OnInit {

  public matchScheduleList:MatchSchedule[];

  constructor(private matchSchedule:MatchScheduleService) { }

  ngOnInit() {
    this.matchSchedule.getMatchSchedules().subscribe(newData => {
      this.matchScheduleList = newData
    })
  }

}
