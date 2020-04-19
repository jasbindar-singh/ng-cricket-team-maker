import { Injectable } from '@angular/core';
import { Subject, Observable, BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public user:string;

  public userSubject = new BehaviorSubject<string>("");

  constructor(private router:Router) {
    if(localStorage.getItem('userLocal'))
      this.user = localStorage.getItem('userLocal');
    else
      this.user = null;
      this.userSubject.next(this.user)
  }

  login(username, password):string{
    if(username=='admin' && password=='admin'){
      this.setUser('admin');
      this.router.navigate(['/players']);
      return "Logged in as Admin!"
    } else if(username=='guest' && password=='guest'){
      this.setUser('guest');
      this.router.navigate(['/home']);
      return "Logged in as Guest!"
    } else 
      return "Wrong Credentials!";
  }

  setUser(user){
    this.user = user;
    localStorage.setItem('userLocal', this.user);
    this.userSubject.next(this.user);
  }

  getUser():Observable<string>{
    return this.userSubject.asObservable();
  }
}
