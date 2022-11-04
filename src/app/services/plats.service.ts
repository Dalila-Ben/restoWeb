import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Plats } from '../models/plats';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlatsService {

  link !: string;

  private httpOptions={
    'headers':new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http:HttpClient) { }

    // requete qui permet de recuperer les donnés PLATS
    getPlats():Observable<Plats[]>{
      this.link='http://localhost/back-resto/script/get_plat.php'
      return this.http.get<Plats[]>(this.link);

    }
}
