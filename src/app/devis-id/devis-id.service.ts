import { Injectable } from '@angular/core';
import { Http } from "@angular/http";

@Injectable()
export class DevisIDService {

  private BASE_URL_OFFRE:string = 'http://localhost:8080/offreF/';

  constructor( private http:Http ) { }

  showDevis(){
    return this.http.get(this.BASE_URL_OFFRE+'/smthingfre');
  }
  
}
