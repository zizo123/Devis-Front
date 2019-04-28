import { Component, OnInit } from '@angular/core';
import { FournisseurService } from "app/fournisseur/fournisseur.service";
import { Fournisseur } from "app/fournisseur/models/fournisseur";
import {Http, Response, Headers} from '@angular/http';
import { Subject } from "rxjs";

@Component({
  selector: 'app-fournisseur',
  templateUrl: './fournisseur.component.html',
  styleUrls: ['./fournisseur.component.css']
})
export class FournisseurComponent implements OnInit {

  private fournisseur: Fournisseur[] = [];
  fournisseurList:Array<Fournisseur>
  private mc ="";
  private mot="";
  private searchTerm = new Subject<string>();
  autocompleteBox = {hide: true};
 

  constructor(
    public fournisseurService:FournisseurService
  ) { }
  

  
  ngOnInit() {
      this.fournisseurService.chercherFournisseur(this.mc).subscribe((resu:Response)=> {
        this.fournisseurList= resu.json().content;   
      })
      
    this.searchTerm.debounceTime(10).distinctUntilChanged().subscribe(searchTerm => {
      
      this.fournisseurService.chercherFournisseur(searchTerm).subscribe(response => {

        this.fournisseurList = response.json().content;

        this.autocompleteBox.hide = false;
      }, err => {
        console.log(err);
      });

    });
 
  }
  deleteFournisseur( fournisseur ){
    if (confirm("Are you sure you want to delete fournisseur "+fournisseur.nom_f+" "+fournisseur.prenom_f +" ?")) {
      this.fournisseurService.deleteFournisseur( Number(fournisseur.id_f) )
        .subscribe(null,
          err => {
            alert("Are you sure you want to  delete fournisseur."+fournisseur.nom_f);
            // Revert
          });
        }
      }

  updateFournisseur( fournisseur : Fournisseur ){

      this.fournisseurService.updateFournisseur( fournisseur ) 
        .subscribe(null);
  } 

  chercherFournisseur( mc : string ){
     this.mc = mc;

    this.fournisseurService.chercherFournisseur( mc ).subscribe(
      (res : Response) =>this.fournisseurList = res.json().content );
  } 

  onKeyup(searchText: string){

    if(searchText !== ""){
      this.searchTerm.next(searchText);
    }
     if(searchText.length == 0){
       this.fournisseurService.chercherFournisseur( this.mot ).subscribe(
         (res : Response) =>this.fournisseurList = res.json().content
       );
    } 
  }

  showDetail( fournisseur ){
    this.autocompleteBox.hide = true;
  }

}
