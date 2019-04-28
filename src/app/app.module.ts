import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpModule } from '@angular/http';
import { routes } from './app.router';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MaterielComponent } from './materiel/materiel.component';
import { FournisseurComponent } from './fournisseur/fournisseur.component';
import { DevisComponent } from './devis/devis.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DevisService } from "app/devis/devis.service";
import { MaterielService } from "app/materiel/materiel.service";
import { FournisseurService } from "app/fournisseur/fournisseur.service";
import { AddMaterielComponent } from './add-materiel/add-materiel.component';
import { AddFournisseurComponent } from './add-fournisseur/add-fournisseur.component';
import { DevisDetailsComponent } from './devis-details/devis-details.component';
import { MaterielDetailsComponent } from './materiel-details/materiel-details.component';
import { FournisseurDetailsComponent } from './fournisseur-details/fournisseur-details.component';
import { DevisDetailService } from "app/devis-details/devis-detail.service";
//import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { DevisIdComponent } from './devis-id/devis-id.component';
import { HomeComponent } from './home/home.component';
import { AuthComponent } from './auth/auth.component';
import { AuthService } from "app/auth/services/auth.service";
import { AuthGuard } from "app/auth/services/auth-guard.service";
import { UserService } from "app/core/user.service";
import {CommonModule} from "@angular/common";
// import {LoginFormComponent} from "./login-form/login-form.component";
// import {RegisterFormComponent} from "./register-form/register-form.component";
import {TabViewModule} from "primeng/components/tabview/tabview";
import {ButtonModule} from "primeng/components/button/button";
import {GrowlModule} from "primeng/components/growl/growl";
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MaterielComponent,
    FournisseurComponent,
    DevisComponent,
    NotFoundComponent,
    AddMaterielComponent,
    AddFournisseurComponent,
    DevisDetailsComponent,
    MaterielDetailsComponent,
    FournisseurDetailsComponent,
    DevisIdComponent,
    HomeComponent,
    AuthComponent,
    RegisterComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    routes,
    HttpModule,
    TabViewModule,
    ButtonModule,
    GrowlModule
    //Ng2SearchPipeModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    UserService,
    DevisService,
    DevisDetailService,
    MaterielService,
    FournisseurService,
    AddMaterielComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
