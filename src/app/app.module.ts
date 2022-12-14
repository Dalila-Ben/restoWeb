import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './sharepage/navbar/navbar.component';
import { FooterComponent } from './sharepage/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CommonModule } from '@angular/common';
import { OrderpageComponent } from './pages/orderpage/orderpage.component';
import { PetitdejComponent } from './pages/petitdej/petitdej.component';
import { PlatComponent } from './pages/plat/plat.component';
import { DessertComponent } from './pages/dessert/dessert.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InscriptionComponent } from './pages/inscription/inscription.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { environment } from 'src/environments/environment';
import { MenuComponent } from './pages/menu/menu.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    AboutComponent,
    ContactComponent,
    DessertComponent,
    InscriptionComponent,
    MenuComponent,
    ConnexionComponent,


  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
