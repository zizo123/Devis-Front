import { Injectable } from '@angular/core';
import { Http,Response, Headers,RequestOptions } from "@angular/http";
import {Observable} from 'rxjs/Rx';
import {Router} from '@angular/router';
import { Materiel } from "app/materiel/models/materiel";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class MaterielService {
  constructor( private _http: Http , private router:Router ) { }

    private BASE_URL:string = 'http://localhost:8080/materiel/';
    private materiel:Materiel =new Materiel();
    currentPage =0;
    size =6;


    findAllMateriel() {
        return this._http.get(this.BASE_URL+'listMateriel');
    }

    addMateriel ( materiel :Materiel ) {
        return this._http.post(this.BASE_URL+'saveMateriel', materiel);
    }

    deleteMateriel( id_materiel ) {
        return this._http.delete(this.BASE_URL+'deleteMateriel/' + id_materiel)
        .map(res => res.json());
    }
    
    updateMateriel( materiel :Materiel ) { 
        return this._http.patch(this.BASE_URL+'updateMateriel/'+ this.materiel.id_materiel,this.materiel);
    }

    chercherMateriel( mc : string) {
        return this._http.get(this.BASE_URL+'chercherMaterielByAll/?mc='+mc+"&page="+this.currentPage+"+&size="+this.size); 
    }
   
}
