import { Component, OnInit } from '@angular/core';
import { DevisService } from "app/devis/devis.service";
import { Devis } from "app/devis/models/devis";

import { FournisseurService } from "app/fournisseur/fournisseur.service";
import { Fournisseur } from "app/fournisseur/models/fournisseur";
import {Http, Response, Headers} from '@angular/http';
import { Subject } from "rxjs";
import { Offre } from "app/devis-details/models/offre";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Router} from "@angular/router"; 

@Component({
  selector: 'app-devis',
  templateUrl: './devis.component.html',
  styleUrls: ['./devis.component.css']
})
export class DevisComponent implements OnInit {
  // incr: number=0;
      
    isEnable:boolean =false; 
    private mot="";
    private offreList: Offre[] = [];
    private fournisseur: Fournisseur[] = [];
    private searchTerm = new Subject<string>();
    autocompleteBox = {hide: true};
    fournisseurList:Array<Fournisseur>

    

  constructor(
    public devisService:DevisService,
    public fournisseurService:FournisseurService,
    private router: Router
  )
   { }

    
  ngOnInit() {

    this.fournisseurService.chercherFournisseur(this.mot).subscribe( (resu:Response)=> {
        this.fournisseurList = resu.json().content;
    });

    this.searchTerm.debounceTime(10).distinctUntilChanged().subscribe(searchTerm => {
      this.fournisseurService.chercherFournisseur(searchTerm).subscribe(response => {
        this.fournisseurList = response.json().content;
        this.autocompleteBox.hide = false;
      }, err => {
        console.log(err);
      });
    }); 
  }

  onKeyup(searchText: string){

     if(searchText !== ""){
       this.searchTerm.next(searchText);
     }
     if(searchText.length == 0){
       this.fournisseurService.chercherFournisseur( this.mot ).subscribe(
         (res : Response) =>{this.fournisseurList = res.json().content,
         this.autocompleteBox.hide = true;}
       );
    } 
  }  
  showDetail( fournisseur ){
    this.isEnable = true;
    this.autocompleteBox.hide = true;
    this.mot = fournisseur.nom_f;
    this.devisService.showDetail( this.mot ).subscribe(
      (res : Response) =>{
            this.offreList = res.json().content;
      });
    
    }
  creerDevis(){
    this.increase();//don't work !
    let devis = new Devis();
   
    devis.etat_devis = "en cours";
    devis.reference = "N12345"+(this.devisService.incr).toString();
    devis.dateCreation =new Date();    
    devis.fournisseurD = new Fournisseur();
    devis.fournisseurD.id_f = this.fournisseurList[0].id_f;
    
      this.devisService.creerDevis(devis).subscribe((data) => {

        let id = data.json().id_devis;
          this.router.navigate(['/devis-details/',id] ,{
              queryParams : {
              name : this.mot, 
              id : this.fournisseurList[0].id_f,
              }
          } );
      });  
  }

  goToDetails( offre ){

    let idD = offre.id_devis;
     
    this.router.navigate( ['/devis-id/',idD] )
  }
  increase()
  {
    this.devisService.incr += 1;
  }


}