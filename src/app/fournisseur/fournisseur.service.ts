import { Injectable } from '@angular/core';
import { Fournisseur } from "app/fournisseur/models/fournisseur";
import { Http,Response, Headers,RequestOptions } from "@angular/http";
import {Observable} from 'rxjs/Rx';
import {Router} from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
@Injectable()
export class FournisseurService {

  constructor( private _http:Http ) { }

  private BASE_URL:string = 'http://localhost:8080/fournisseur/';

  private fournisseur:Fournisseur = new Fournisseur();

  findAllFournisseur(){
    return this._http.get(this.BASE_URL+'listFournisseur');
  }

  addFournisseur(fournisseur :Fournisseur){
        return this._http.post(this.BASE_URL+'saveFournisseur', fournisseur);
  }

  deleteFournisseur(id_f){
      return this._http.delete(this.BASE_URL+'deleteFournisseur/' + id_f)
      .map(res => res.json());
  }
  updateFournisseur(fournisseur :Fournisseur ) { 
      return this._http.patch(this.BASE_URL+'updateFournisseur/'+ this.fournisseur.id_f,this.fournisseur);
  }

  chercherFournisseur( mc : string) {    
     return this._http.get(this.BASE_URL+'chercherFournisseur/?mc='+mc); 
  }

}
