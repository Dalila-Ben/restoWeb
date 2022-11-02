import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Dessert } from '../models/dessert';




@Injectable({
  providedIn: 'root'
})

export class DessertService {

  link !: string;


  private httpOptions={
    'headers':new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private http:HttpClient) { }

  // requete qui permet de recuperer les donnés dessert
  getDessert():Observable<Dessert[]>{
    this.link='http://localhost/back-resto/script/get_dessert.php'
    return this.http.get<Dessert[]>(this.link);

  }
}
