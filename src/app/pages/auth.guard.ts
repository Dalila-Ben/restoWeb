import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

// Le Guard Router qui sera utilisé pour protéger le composant admin de l’accès des utilisateurs non authentifiés.

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService){}

  /*
  dans la méthode canActivate (), nous implémentons la logique qui accordera ou refusera l’accès à l’utilisateur en appelant la méthode estConnecte() pour vérifier si l’utilisateur est connecté avant d’activer la route.*/
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authService.estConnecte();
  }

}
