import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ImageUploadService {

  constructor(private http:HttpClient) { }

  imageUpload(
    nom:string,
    recette:string,
    image: File): Observable<any>{
      var formData: any = new FormData();
      formData.append("nom", nom);
      formData.append("recette", recette);
      formData.append("fileToUpload", image);
      return this.http.post('http://localhost/back-resto/script/single_upload.php', formData, {
        reportProgress:true,
        observe: 'events'
      }).pipe(
        catchError((err:any)=>{
          alert(err.message);
          return throwError(err.message);
        })
      )
    }
}
