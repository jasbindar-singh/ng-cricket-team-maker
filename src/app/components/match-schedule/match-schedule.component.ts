import { Component, OnInit } from '@angular/core';
import { MatchScheduleService } from '../../services/match-schedule.service';
import { MatchSchedule } from '../../class/match-schedule';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-match-schedule',
  templateUrl: './match-schedule.component.html',
  styleUrls: ['./match-schedule.component.sass']
})
export class MatchScheduleComponent implements OnInit {

  public matchScheduleList$:Observable<MatchSchedule[]>;

  constructor(private matchSchedule:MatchScheduleService) { }

  ngOnInit() {
    this.matchScheduleList$ = this.matchSchedule.getMatchSchedules();
    // this.matchSchedule.getMatchSchedules().subscribe(newData => {
    //   this.matchScheduleList = newData
    // })
  }

}
