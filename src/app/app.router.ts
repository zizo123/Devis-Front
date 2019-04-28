import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule }   from '@angular/router';

import { AppComponent } from './app.component';
import { DevisComponent } from './devis/devis.component';
import { FournisseurComponent } from './fournisseur/fournisseur.component';
import { MaterielComponent } from './materiel/materiel.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AddMaterielComponent } from "app/add-materiel/add-materiel.component";
import { AddFournisseurComponent } from "app/add-fournisseur/add-fournisseur.component";
import { DevisDetailsComponent } from "app/devis-details/devis-details.component";
import { MaterielDetailsComponent } from "app/materiel-details/materiel-details.component";
import { FournisseurDetailsComponent } from "app/fournisseur-details/fournisseur-details.component";
import { DevisIdComponent } from "app/devis-id/devis-id.component";
import { AuthComponent } from "app/auth/auth.component";
import { HomeComponent } from "app/home/home.component";
import { AuthGuard } from "app/auth/services/auth-guard.service";
import { RegisterComponent } from "app/register/register.component";



export const router: Routes = [

    {  path: '', redirectTo: '/auth',pathMatch: 'full' },
    { path: 'register',  component: RegisterComponent},
    { path: 'auth', component: AuthComponent },
    { path: 'home', component: HomeComponent },
  //{ path: '', redirectTo: 'devis' ,pathMatch: 'full'},
  { path: 'devis',  component: DevisComponent , canActivate: [AuthGuard]},
  { path: 'materiel',  component: MaterielComponent},
  { path: 'add-materiel', component:AddMaterielComponent},   
  { path: 'materiel-details', component:MaterielDetailsComponent},  
  { path: 'devis-details/:id', component:DevisDetailsComponent}, 
  { path: 'devis-id/:idD', component:DevisIdComponent},    
  { path: 'fournisseur/:id', component:FournisseurDetailsComponent}, 
  { path: 'add-fournisseur', component:AddFournisseurComponent}, 
  { path: 'fournisseur', component: FournisseurComponent }, 
  { path: 'not-found', component: NotFoundComponent }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);

