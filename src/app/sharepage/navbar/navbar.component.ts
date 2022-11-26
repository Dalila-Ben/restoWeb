import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  loginbtn !: boolean;
  logoutbtn !: boolean;

  constructor( private loginService: LoginService) {
    loginService.getLoggedInName.subscribe(nom => this.changeName(nom));
    if(this.loginService.isLoggedIn()){
      console.log("loggedin");
      this.loginbtn=false;
      this.logoutbtn=true;
    }
    else {
      this.loginbtn=true;
      this.logoutbtn=false;
    }
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  private changeName(nom: boolean): void {
    this.logoutbtn = nom;
    this.loginbtn = !nom;
  }
  logout(){
    this.loginService.deleteToken();
    window.location.href = window.location.href;
  }
}
