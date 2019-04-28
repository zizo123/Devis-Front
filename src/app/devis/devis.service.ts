import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { FournisseurService } from "app/fournisseur/fournisseur.service";
import { Fournisseur } from "app/fournisseur/models/fournisseur";
import { Devis } from "app/devis/models/devis";

@Injectable()
export class DevisService {

  public incr : number = 0;
  private devis : Devis = new Devis();
  
  private BASE_URL:string = 'http://localhost:8080/devis/';

  private BASE_URL_OFFRE:string = 'http://localhost:8080/offreF/';

  constructor(
    private http:Http,
    private fournisseurService:FournisseurService
  ) { }


  findAll(){
    return this.http.get(this.BASE_URL+'listDevis');
  }

  chercherDevis( mc : string) {
     return this.http.get(this.BASE_URL+'chercherDevis?mc='+mc); 
  }

  showDetail( mc : string){
    return this.http.get(this.BASE_URL+'chercherDevisFournisseur/?mc='+mc);
  }

  creerDevis( devis ){
    return this.http.post(this.BASE_URL+'saveDevis', devis);
  }



}
