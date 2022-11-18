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
  @Output() getLoggedInName: EventEmitter<any> = new EventEmitter();
  constructor(private httpClient : HttpClient) { }

  public userlogin(nom: string, password:string) {
  alert(nom)
  return this.httpClient.post<any>(this.baseUrl + '/login.php', { nom, password }).pipe(map(
  Users => {
  this.setToken(Users[0].nom);
  this.getLoggedInName.emit(true);
  return Users;
  }));
  }

  public userregistration(nom:string,email:string,password:string) {
  return this.httpClient.post<any>(this.baseUrl + '/inscription.php', { nom,email, password }).pipe(map(
  Users => {
  return Users;
  }));
  }

  //token
  setToken(token: string) {
  localStorage.setItem('token', token);
  }
  getToken() {
  return localStorage.getItem('token');
  }
  deleteToken() {
  localStorage.removeItem('token');
  }
  isLoggedIn() {
  const usertoken = this.getToken();
  if (usertoken != null) {
  return true
  }
  return false;
  }
}
