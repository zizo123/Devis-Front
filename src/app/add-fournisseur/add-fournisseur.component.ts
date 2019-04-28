import { Component, OnInit } from '@angular/core';
import { Fournisseur } from "app/fournisseur/models/fournisseur";
import { FournisseurService } from "app/fournisseur/fournisseur.service"; 
import {Http, Response, Headers} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {Router} from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-fournisseur',
  templateUrl: './add-fournisseur.component.html',
  styleUrls: ['./add-fournisseur.component.css']
})
export class AddFournisseurComponent  {

  fournisseur : Fournisseur = new Fournisseur();
   addFournisseur() {
        
            this._fournisseurService.addFournisseur(this.fournisseur)
                .subscribe((res : Response) => {  },
                );
    }
  constructor(  private _fournisseurService: FournisseurService ) { }

  
}
