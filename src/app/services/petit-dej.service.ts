import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PetitDej } from '../models/petit-dej';

@Injectable({
  providedIn: 'root'
})
export class PetitDejService {
  link !: string;

  private httpOptions={
    'headers':new HttpHeaders({
      'Content-Type': 'application/json',
    })
  }

  constructor(private http:HttpClient) { }

  // requete qui permet de recuperer les donnés dessert
  getPetitDej():Observable<PetitDej[]>{
    this.link='http://localhost/back-resto/script/get_petitDej.php'
    return this.http.get<PetitDej[]>(this.link);

  }
}
