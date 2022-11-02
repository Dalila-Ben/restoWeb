import { Injectable } from '@angular/core';
import { Utilisateur } from './utilisateur';

// Ici je vais créer un service Angular qui exporte les méthodes requises pour authentifier les utilisateurs.
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  // ici je cree les differentes methodes pour la connexion et la deconnexion
  public seConnecter(userInfo: Utilisateur){
    localStorage.setItem('ACCESS_TOKEN', "access_token");
  }
  public estConnecte(){
    return localStorage.getItem('ACCESS_TOKEN') !== null;

  }
  public deconnecter(){
    localStorage.removeItem('ACCESS_TOKEN');
  }
}
