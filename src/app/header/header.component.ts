import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  public username:string;

  constructor(private auth: AuthService) {
  }

  ngOnInit() {
    this.auth.getUser().subscribe(newUser => {
      this.username = newUser;
    })
  }

}
