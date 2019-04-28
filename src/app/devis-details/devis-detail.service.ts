import { Injectable } from '@angular/core';
import { Http } from "@angular/http";

@Injectable()
export class DevisDetailService {

  private BASE_URL:string = 'http://localhost:8080/materiel/';

  private BASE_URL_OFFRE:string = 'http://localhost:8080/offreF/';

  constructor(
    private http:Http
  ) { }

  showDetailMateriel( mc : string){
    return this.http.get(this.BASE_URL+'chercherMaterielFournisseur/?mc='+mc);
  }

  showDetailOffre( mc : string, num : string){
    return this.http.get(this.BASE_URL+'findMaterielFournisseur/?mc='+mc+'&num='+num);
  }

  saveListOffre( result ){
    return this.http.post(this.BASE_URL_OFFRE+'/saveListOffre',result);
  }

  deleteOffreF(offre){
    console.log("deleteOffre");
  }
}
