import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ImageUploadService {

  constructor(private http:HttpClient) { }

  imageUpload(nom:string,recette:string,image: File): Observable<any>{
      var formData: any = new FormData();
      //le form value est un container vide ou on va lui mettre les valeurs clefs ci-dessus
      //la variable formData va etre envoyé a mon fichier PHP
      formData.append("nom", nom);
      formData.append("recette", recette);
      formData.append("fileToUpload", image);
      return this.http.post('http://localhost/back-resto/script/single_upload.php',
      formData, {
        reportProgress:true,
        observe: 'events'
      }).pipe(
      //avec le pipe on va reprendre les erruers eventuels que le script peut avoir
        catchError((err:any)=>{
          alert(err.message);
          return throwError(err.message);
        })
      )
    }
}
