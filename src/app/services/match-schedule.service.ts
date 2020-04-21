import { Injectable } from '@angular/core';
import { MatchSchedule } from '../class/match-schedule';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MatchScheduleService {

  public matchScheduleList:MatchSchedule[];

  public matchScheduleSubject = new BehaviorSubject<MatchSchedule[]>([]);

  constructor() {
    this.matchScheduleList = new Array<MatchSchedule>();
    this.matchScheduleList.push(new MatchSchedule('Test', 'Eden Gardens1', 'India', new Date()));
    this.matchScheduleList.push(new MatchSchedule('One Day', 'Eden Gardens2', 'Australia', new Date()));
    this.matchScheduleList.push(new MatchSchedule('Two Day', 'Eden Gardens3', 'Pakistan', new Date()));
    this.matchScheduleList.push(new MatchSchedule('T20', 'Eden Gardens4', 'Sri Lanka', new Date()));
    this.matchScheduleSubject.next(this.matchScheduleList);
  }

  getMatchSchedules():Observable<MatchSchedule[]>{
    return this.matchScheduleSubject.asObservable();
  }

}
