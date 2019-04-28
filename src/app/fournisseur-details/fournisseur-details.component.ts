import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { FournisseurService } from "app/fournisseur/fournisseur.service";

@Component({
  selector: 'app-fournisseur-details',
  templateUrl: './fournisseur-details.component.html',
  styleUrls: ['./fournisseur-details.component.css']
})
export class FournisseurDetailsComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private fournisseurService:FournisseurService
  ) { }

   fournisseurId = this.route.snapshot.params['id'];
  
   ngOnInit() {
   }




}
