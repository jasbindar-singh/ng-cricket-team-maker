import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  public username:String;
  public password:String;

  constructor(private auth: AuthService) {
  }

  ngOnInit() {
  }

  handleSubmit(event){
    event.preventDefault()
    let msg = this.auth.login(this.username, this.password);
    alert(msg)
  }

}
