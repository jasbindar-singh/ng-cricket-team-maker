import { Injectable } from '@angular/core';
import { Player } from '../class/player';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  public teamList:Player[];

  public teamSubject = new BehaviorSubject<Player[]>([]);

  constructor() {
    if(localStorage.getItem('teamLocal'))
      this.teamList = JSON.parse(localStorage.getItem('teamLocal'));
    else
      this.teamList = new Array<Player>();
    this.teamSubject.next(this.teamList);
  }

  getTeamList():Observable<Player[]>{
    return this.teamSubject.asObservable();
  }

  addTeamMember(player:Player):void{
    if(this.teamList.length < 11){
      this.teamList.push(player);
      alert(`Added: ${player.name}!`)
      localStorage.setItem('teamLocal', JSON.stringify(this.teamList));
      this.teamSubject.next(this.teamList);
    } else {
      alert("Cannot add more than 11 players!")
    }
  }

  removeTeamMember(index:number):void{
    this.teamList.splice(index, 1);
    localStorage.setItem('teamLocal', JSON.stringify(this.teamList));
    this.teamSubject.next(this.teamList);
  }
}
