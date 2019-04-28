import { Component, OnInit } from '@angular/core';
import { MaterielService } from "app/materiel/materiel.service";
import { Materiel } from "app/materiel/models/materiel";
import { ActivatedRoute, Router } from "@angular/router";
import { Subject } from "rxjs";
import { Http, Response, Headers } from '@angular/http';
import { Offre } from "app/devis-details/models/offre";
import { DevisService } from "app/devis/devis.service";
import { Devis } from "app/devis/models/devis";
import { DevisComponent } from "app/devis/devis.component";
import { DevisDetailService } from "app/devis-details/devis-detail.service";

@Component({
  selector: 'app-devis-details',
  templateUrl: './devis-details.component.html',
  styleUrls: ['./devis-details.component.css']
})
export class DevisDetailsComponent implements OnInit {
  num: string;
  ssm: string;
  public materiel: Materiel[] = [];
  materielList:Array<Materiel> = [];
  autoCompleteMaterielList:Array<Materiel> = [];
  public offreList: Offre[] = [];
  devisId = this.route.snapshot.params['id'];
  fourn = this.route.snapshot.queryParams;
  public mot="";
  public searchTerm = new Subject<string>();
  autocompleteBox = {hide: true};

  constructor(
    public route: ActivatedRoute,
    public router: Router,
    public materielService:MaterielService,
    public devisService:DevisService,
    public devisDetailService:DevisDetailService,
    public _http : Http
  ) { }

  ngOnInit() {

    this.searchTerm.debounceTime(10).distinctUntilChanged().subscribe(searchTerm => {
      this.materielService.chercherMateriel(searchTerm).subscribe(response => {
        this.autoCompleteMaterielList = response.json().content;
        this.autocompleteBox.hide = false;
        if(searchTerm === '') {
          this.autoCompleteMaterielList = [];
        }
      }, err => {
        console.log(err);
      });
    }); 

  }

   onKeyup(searchText: string){

    if(searchText !== ""){
      this.searchTerm.next(searchText);
            this.ssm =searchText;
    }
     if(searchText.length == 0){
       this.materielService.chercherMateriel(this.mot).subscribe(
         (res : Response) =>{this.materielList.concat(res.json().content)
        this.autocompleteBox.hide = true;
          }
       );
    } 
  }

  addElementToList(materiel: Materiel){

   if (this.materielList.indexOf(materiel) === -1) {
      this.materielList.push(materiel)
      this.autocompleteBox.hide = true;
    }
  }

  showMateriel(){
    this.autocompleteBox.hide = true;

    this.devisDetailService.showDetailOffre(this.fourn.test, this.mot).subscribe(
      (res : Response) =>{
          this.offreList=res.json().content;
      });
    }
    saveListOffre(){
      let result = this.materielList.map((materiel) => {
        return {
            qte: Number(materiel.quantity),
            prixFournisseur: materiel.prixMateriel,
            materiel: {
                id_materiel: Number(materiel.id_materiel)
            },
            fournisseur: {
                id_f: Number(this.fourn.id)
            },
            devis: {
                id_devis: Number(this.devisId)
            }
          };
      });

      this.devisDetailService.saveListOffre(result).subscribe();

      this.router.navigate(['/devis-genere/'] ,{
        queryParams:{
        obj : this.mot
        }
      } );
    }

    deleteOffreF(offre){
      console.log(offre.id_offre);
    }
    QPrint():void {
      console.log("print me !");
    }

      
        
  }
