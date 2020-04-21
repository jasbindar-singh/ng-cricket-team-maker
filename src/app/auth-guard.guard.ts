import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import { AuthService } from './services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {

  constructor(private auth: AuthService, private router: Router){}

  canActivate():boolean{
      let loggedIn = localStorage.getItem("userLocal");

      // this.auth.getUser().subscribe(newData => {
      //   loggedIn = newData
      // });

      if(loggedIn)
        return true;
      else{
        this.router.navigate(['/login']);
        return false;
      }
  }

}
