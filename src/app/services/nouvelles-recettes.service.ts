import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NouvellesRecettesService {
  redirectUrl: string | undefined;
  baseUrl:string = "http://localhost/back-resto/script";
  tokenUser: any= false;
  @Output() getLoggedInName: EventEmitter<any> = new EventEmitter();
  constructor(private httpClient : HttpClient) { }

  public getnvRecettes(nom: string, recette:string) {
  //alert(nom)
  return this.httpClient.post<any>(this.baseUrl + '/single_upload.php', { nom, recette });
  }



}
