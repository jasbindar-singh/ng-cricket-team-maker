import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  public username$:Observable<string>;

  constructor(private auth: AuthService) {
  }

  ngOnInit() {
    this.username$ = this.auth.getUser();
    // this.auth.getUser().subscribe(newUser => {
    //   this.username = newUser;
    // })
  }

}
