import { Injectable } from '@angular/core';
import { Subject, Observable, BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public userInfo:string;
  public userSubject = new BehaviorSubject<string>("");

  constructor(private router:Router) {
    if(localStorage.getItem('userLocal'))
      this.userInfo = localStorage.getItem('userLocal');
    else
      this.userInfo = null;
    this.userSubject.next(this.userInfo)
  }

  login(username, password):string{
    if(username=='admin' && password=='admin'){
      this.setUser(username);
      this.router.navigate(['/players']);
      return "Logged in as Admin!"
    } else if(username=='guest' && password=='guest'){
      this.setUser(username);
      this.router.navigate(['/home']);
      return "Logged in as Guest!"
    } else
      return "Wrong Credentials!";
  }

  logout():string{
    this.userInfo = "";
    localStorage.removeItem("userLocal");
    this.userSubject.next(this.userInfo);
    return "Logged Out Successfully!"
  }

  setUser(user):void{
    this.userInfo = user;
    localStorage.setItem('userLocal', this.userInfo);
    this.userSubject.next(this.userInfo);
  }

  getUser():Observable<string>{
    return this.userSubject.asObservable();
  }

}
