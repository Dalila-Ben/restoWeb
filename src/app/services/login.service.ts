import { Injectable, Output, EventEmitter } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Users } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  redirectUrl: string | undefined;
  baseUrl:string = "http://localhost/back-resto/script";
  tokenUser: any= false;
  @Output() getLoggedInName: EventEmitter<any> = new EventEmitter();
  constructor(private httpClient : HttpClient) { }

  public userlogin(email: string, password:string) {
  //alert(nom)
  return this.httpClient.post<any>(this.baseUrl + '/login.php', { email, password });
  }

  public userregistration(nom:string,email:string,password:string) {
  return this.httpClient.post<any>(this.baseUrl + '/inscription.php', { nom,email, password }).pipe(map(
  Users => {
  return Users;
  }));
  }

  isLoggedIn(tokenUser: any = this.tokenUser): boolean{
    if(tokenUser!= null){
      return true;
    }else {
      return false;
    }
  }

  deleteToken(){
    this.tokenUser= null;
  }


}
