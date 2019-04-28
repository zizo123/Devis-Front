import { Component, OnInit } from '@angular/core';
import { Materiel } from "app/materiel/models/materiel";
import { MaterielService } from "app/materiel/materiel.service"; 
import {Http, Response, Headers} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {Router} from '@angular/router';
import { NgForm } from '@angular/forms';
import { FournisseurService } from "app/fournisseur/fournisseur.service";
import { Fournisseur } from "app/fournisseur/models/fournisseur";

@Component({
  selector: 'app-add-materiel',
  templateUrl: './add-materiel.component.html',
  styleUrls: ['./add-materiel.component.css']
})
export class AddMaterielComponent {
  
  materiel : Materiel = new Materiel();

  constructor( private _materielService: MaterielService  ) { }

   addMateriel() {
      this._materielService.addMateriel(this.materiel)
       .subscribe( (res: Response) => {  } );
    }
  


}
