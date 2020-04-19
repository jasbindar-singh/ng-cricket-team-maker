import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Player } from './player';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  public playerList:Player[];
  public url:string = 'http://localhost:8000/players'

  constructor(private http: HttpClient) {
    this.playerList = new Array<Player>();
    // this.playerList.push(new Player(1, "Rohit Sharma", "Right-hand bat", "https://admin.thecricketer.com/weblab/sites/96c8b790-b593-bfda-0ba4-ecd3a9fdefc2/resources/images/site/sharmaheadshot-min.jpg"));
    // this.playerList.push(new Player(2, "M.S Dhoni", "Right-hand bat, wicketkeeper", "https://admin.thecricketer.com/weblab/Sites/96c8b790-b593-bfda-0ba4-ecd3a9fdefc2/resources/images/site/dhoniheadshot-min.jpg"));
    // this.playerList.push(new Player(3, "Virat Kohli", "Right-hand bat", "https://admin.thecricketer.com/weblab/Sites/96c8b790-b593-bfda-0ba4-ecd3a9fdefc2/resources/images/site/kohliheadshot-min.jpg"));
    // this.playerList.push(new Player(4, "KL Rahul", "Right-hand bat, wicketkeeper", "https://admin.thecricketer.com/weblab/sites/96c8b790-b593-bfda-0ba4-ecd3a9fdefc2/resources/images/site/rahulheadshot-min.jpg"));
    // this.playerList.push(new Player(5, "Hardik Pandya", "Right-hand bat, right-arm medium-fast", "https://admin.thecricketer.com/weblab/sites/96c8b790-b593-bfda-0ba4-ecd3a9fdefc2/resources/images/site/pandyaheadshot-min.jpg"));
    // this.playerList.push(new Player(6, "Bhuvneshwar Kumar", "Right-hand bat, right-arm medium", "https://admin.thecricketer.com/weblab/sites/96c8b790-b593-bfda-0ba4-ecd3a9fdefc2/resources/images/site/kumarheadshot-min.jpg"));
    // this.playerList.push(new Player(7, "Dinesh Karthik", "Right-hand bat, wicketkeeper", "https://admin.thecricketer.com/weblab/sites/96c8b790-b593-bfda-0ba4-ecd3a9fdefc2/resources/images/site/karthikheadshot-min.jpg"));
    // this.playerList.push(new Player(8, "Kedar Jadhav", "Right-hand bat, right-arm offspin", "https://admin.thecricketer.com/weblab/sites/96c8b790-b593-bfda-0ba4-ecd3a9fdefc2/resources/images/site/kjadhavheadshot-min.jpg"));
    // this.playerList.push(new Player(9, "Ravindra Jadeja", "Left-hand bat, slow left arm", "https://admin.thecricketer.com/weblab/sites/96c8b790-b593-bfda-0ba4-ecd3a9fdefc2/resources/images/site/jadejaheadshot-min.jpg"));
    // this.playerList.push(new Player(10, "Shikhar Dhawan", "Left-hand bat", "https://admin.thecricketer.com/weblab/sites/96c8b790-b593-bfda-0ba4-ecd3a9fdefc2/resources/images/site/dhawanheadshot-min.jpg"));
    // this.playerList.push(new Player(11, "Yuzvendra Chahal", "Right-hand bat, right-arm legspin", "https://admin.thecricketer.com/weblab/sites/96c8b790-b593-bfda-0ba4-ecd3a9fdefc2/resources/images/site/chahalheadshot-min.jpg"));
    // this.playerList.push(new Player(12, "Jasprit Bumrah", "Right-hand bat, right-arm fast-medium", "https://admin.thecricketer.com/weblab/sites/96c8b790-b593-bfda-0ba4-ecd3a9fdefc2/resources/images/site/bumrahheadshot-min.jpg"));
  }

  getPlayerList():Observable<Player[]>{
    // return this.playerList;
    return this.http.get<Player[]>(this.url);
  }

}
