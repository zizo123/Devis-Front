import { Component, OnInit, Input } from '@angular/core';
import { MaterielService } from "app/materiel/materiel.service";
import { Materiel } from "app/materiel/models/materiel";
import {Http, Response, Headers} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { Subject } from "rxjs";
import { Injectable, Pipe, PipeTransform } from '@angular/core';


@Component({
  selector: 'app-materiel',
  templateUrl: './materiel.component.html',
  styleUrls: ['./materiel.component.css'],
  //providers : [FilterPipe]
})
export class MaterielComponent implements OnInit {
  currentPageClicked: number=0;
  pages = [];
  private materiel: Materiel[] = [];
  private mot="";
  private mc ="";
  private searchTerm = new Subject<string>();
  totalPages:number
  currentPage:number
  materielList:Array<Materiel>
  

  constructor( public materielService:MaterielService ) { }


  ngOnInit() {
        this.searchTerm.debounceTime(10).distinctUntilChanged().subscribe(searchTerm => {
        this.materielService.chercherMateriel(searchTerm).subscribe(response => {
        this.materielList = response.json().content;

      }, err => {
        console.log(err);
      });

    });

    this.materielService.chercherMateriel( this.mc ).subscribe((resu: Response) => {
        this.materielList= resu.json().content;
        this.totalPages = resu.json().totalPages
        this.currentPage = resu.json().number
        this.pages = new Array( resu.json().totalPages ) 
      })
       
  }
  deleteMateriel( materiel ){
    if (confirm("Are you sure you want to delete materiel "+materiel.numMat+" ?")) {
      this.materielService.deleteMateriel( Number( materiel.id_materiel ) )
        .subscribe(null,
          err => {
            alert("Could not delete Materiel.");
            // Revert
          });
        }
      }
   updateMateriel( materiel : Materiel ){
      // Set 
      this.materielService.updateMateriel( materiel ) 
        .subscribe();
      } 
   chercherMateriel(mc : string){
     this.mc=mc;

    this.materielService.chercherMateriel( mc ).subscribe(
      ( res : Response ) =>this.materielList = res.json().content );
   } 
   
    onKeyup( searchText: string ){

    if(searchText !== ""){
      this.searchTerm.next( searchText );
    }
     if(searchText.length == 0){
       this.materielService.chercherMateriel( this.mot ).subscribe(
         ( res : Response ) => this.materielList = res.json().content
       );
    } 
  }
  gotoPage( i ){

    this.materielService.currentPage = i;
    this.currentPageClicked = this.materielService.currentPage;
    this.chercherMateriel( this.mc );
  }

  getMateriel(){
    if( this.mc = ''){
    this.materielService.currentPage = 0;
    this.currentPageClicked = this.materielService.currentPage;

    this.chercherMateriel( this.mc );
    }
  
  }

  addMateriel(){
     console.log("Add Materiel !")   
  }


}
