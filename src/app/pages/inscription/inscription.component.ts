import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  constructor() { }

  inscriptionForm: any; //formName

  ngOnInit(): void {
    this.inscriptionForm = new FormGroup({
      "nom": new FormControl(null, [Validators.required, Validators.pattern('[a-zA-Z]*')]),
      "email": new FormControl(null, [Validators.required, Validators.email]),
      "password": new FormControl(null,{})
    })
  }

  //fonction du submit
  submitData(){
    console.log(this.inscriptionForm.value);

  }
  get nom() { return this.inscriptionForm.get('nom');}
  get email() { return this.inscriptionForm.get('email');}
}
