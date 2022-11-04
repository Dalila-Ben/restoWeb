import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm } from  '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from  '@angular/router';
import { ConnexionService } from 'src/app/services/connexion.service';
import { error } from 'console';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  angForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private connexionService:ConnexionService, private router:Router) {
    this.angForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.minLength(1), Validators.email]],
      password: ['', Validators.required]
    });
   }
    ngOnInit() {  } //peut etre le VALUE EST UN PROBLEME!!!
   postData(angForm1: { value: { email: any; password: any; }; }){
    this.connexionService.userlogin(angForm1.value.email, angForm1.value.password).pipe(first()).subscribe(data => {
      const redirect = this.connexionService.redirectUrl ? this.connexionService.redirectUrl : '/Home';
      this.router.navigate([redirect]);
    },
    error => {
      alert("Nom d'utilisateur ou mot de passe incorrect")
    });
    }
    get email() { return this.angForm.get('email'); }
    get password() { return this.angForm.get('password'); }
   }

