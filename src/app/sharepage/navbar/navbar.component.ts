import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  constructor( private loginService: LoginService) {

  }
  public get tokenUser(): any {
    return this.loginService.tokenUser;
  }

  ngOnInit(): void {
    this.changeName();
  }


  private changeName(): void {
    // this.logoutbtn = nom;
    // this.loginbtn = !nom;
    console.log(this.loginService.tokenUser);

    if(this.loginService.tokenUser != undefined){

    console.log(this.loginService.tokenUser);
  }
}
logout(){
  this.loginService.deleteToken();
  window.location.href = window.location.href;
}
}
