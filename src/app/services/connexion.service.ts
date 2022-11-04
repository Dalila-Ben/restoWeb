import { Injectable, Output, EventEmitter } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Users } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class ConnexionService {
  redirectUrl: string | undefined;
  baseUrl:string = "http://localhost/back-resto/script/login.php";
  @Output() getLoggedInName: EventEmitter<any> = new EventEmitter();
  constructor(private httpClient : HttpClient) { }
  public userlogin(username: any, password: any) {
  alert(username)
  return this.httpClient.post<any>(this.baseUrl + '/login.php', { username, password })
  .pipe(map(Users => {
  this.setToken(Users[0].nom);
  this.getLoggedInName.emit(true);
  return Users;
  }));
  }

  public userregistration(nom: any,email: any,password: any) {
  return this.httpClient.post<any>(this.baseUrl + '/register.php', { nom,email, password })
  .pipe(map(Users => {
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
