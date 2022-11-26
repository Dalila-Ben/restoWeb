import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Recettes } from '../models/recettes';

@Injectable({
  providedIn: 'root'
})
export class RecettesService {
  link !: string;

  private httpOptions={
    'headers':new HttpHeaders({
      'Content-Type': 'application/json',
    })
  }

  constructor(private http:HttpClient) { }

  // requete qui permet de recuperer les donnés des recettes
  getRecettes():Observable<Recettes[]>{
    this.link='http://localhost/back-resto/script/get-recettes.php'
    return this.http.get<Recettes[]>(this.link);

  }
}
