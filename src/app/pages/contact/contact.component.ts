import { HttpEvent, HttpEventType } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { throws } from 'assert';
import { ImageUploadService } from 'src/app/services/image-upload.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  title = 'ngImgUpload';
  form:FormGroup;
  progress:number=0;
  msgs: any;
  imageUploadService: any;
  imgMsg: any;

  ngOnInit(): void {
    this.submitImage();
  }
  constructor(public fb: FormBuilder, public imageUpload: ImageUploadService) {

    this.form = this.fb.group({
      nom: [''],
      recette: [''],
      image: [null]
    })

   }
   uploadFile(event:any){
    const file = event.target.files ? event.target.files[0]: '';
    //console.log(file);
    this.form.patchValue({
      image: file
    });
    this.form.get('image')?.updateValueAndValidity()

   }

   submitImage(){
     this.imageUploadService.imageUpload(
       this.form.value.nom,
       this.form.value.recette,
       this.form.value.image
     ).subscribe((event: HttpEvent<any>) => {
      switch (event.type) {
        case HttpEventType.UploadProgress:
          if(event.total){
            this.progress = Math.round((100 / event.total) * event.loaded);
            this.msgs = `Votre image a bien été chargée! ${this.progress}%`;
          }
          break;
        case HttpEventType.Response:
          if(event.body.error){
            this.imgMsg = event.body.error
          }else if(event.body.success){
            this.imgMsg = event.body.success
          }

          setTimeout(() => {
            this.progress = 0;
            this.msgs='';
          }, 1500);

      }

     })
   }




}




