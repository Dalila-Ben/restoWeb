import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';

import { InscriptionComponent } from './pages/inscription/inscription.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { MenuComponent } from './pages/menu/menu.component';
import { AuthguardGuard } from './authguard.guard';


//ici on met les routes pour quand on clique sur la barre de navigation on puisse atterir sur la bonne page donc on reprendra le routeur link dans le composant navbar
const routes: Routes = [
  // Une pathMatch pour rediriger le chemin vide vers le chemin de connexion
  // {path: '', pathMatch:'full', redirectTo:'Connexion'},

  {path: 'Home', component:HomeComponent, },
  { path: '',   redirectTo: 'Home', pathMatch: 'full' },
  {path: 'inscription', component:InscriptionComponent, },
  {path: 'connexion', component:ConnexionComponent},
  {path: 'Menu', component:MenuComponent},
  {path: 'About', component:AboutComponent},
  {path: 'Contact', component:ContactComponent}
];

// canActivate: [AuthguardGuard]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
