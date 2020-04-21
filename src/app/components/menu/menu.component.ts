import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass']
})
export class MenuComponent implements OnInit {

  public isCollapsed: boolean = true;
  public user = "";
  constructor(private auth:AuthService) { }

  ngOnInit() {
    this.auth.getUser().subscribe(newData => {
      this.user = newData
    })
  }

  toggleCollapse(): void {
    this.isCollapsed = !this.isCollapsed;
  }

  handleClick(){
    alert(this.auth.logout());
  }

}
