import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {


  form: FormGroup;

  constructor(private fb: FormBuilder, private loginService: LoginService, private router:Router) {
    this.form = this.fb.group({
      "nom": ['', [Validators.required, Validators.pattern('[a-zA-Z]*')]],
      "email": ['',[Validators.required, Validators.email]],
      "password":['', Validators.required]
    });
  }

  ngOnInit(): void {}

  postData(form1: any){
   this.loginService.userregistration(form1.value.nom, form1.value.email, form1.value.password).pipe(first()).subscribe(
    data => {
      this.router.navigate(['connexion']);
    },
    error => {});
  }
  get email() { return this.form?.get('email')}
  get password() { return this.form?.get('password') }
  get name() { return this.form?.get('nom') }
}
