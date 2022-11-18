import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { first } from 'rxjs';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  angForm: FormGroup;

  constructor(private fb:FormBuilder,private dataService:LoginService,private router:Router) {
    this.angForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
   }

  ngOnInit(): void {
  }

  postData(angForm2: any){
    this.dataService.userlogin(angForm2.value.email, angForm2.value.password).pipe(first()).subscribe(
      data => {
        const redirect = this.dataService.redirectUrl ? this.dataService.redirectUrl : '/Home';
        this.router.navigate([redirect]);
      },
      // error => {
      //   alert("L'identifiant ou le mot de passe sont incorrects")
      // }
    );
  }

  get email(){return this.angForm.get('email')}
  get password(){return this.angForm.get('password')}

}
