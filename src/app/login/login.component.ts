import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  public username:String;
  public password:String;
  public user:String;

  constructor(private auth:AuthService) {
    this.auth.getUser().subscribe(newUser => this.user = newUser)
  }

  ngOnInit() {
  }

  handleSubmit(event){
    event.preventDefault()
    let msg = this.auth.login(this.username, this.password);
    alert(msg)
  }

}
