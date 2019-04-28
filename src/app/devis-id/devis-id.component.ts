import { Component, OnInit } from '@angular/core';
import { FournisseurService } from "app/fournisseur/fournisseur.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-devis-id',
  templateUrl: './devis-id.component.html',
  styleUrls: ['./devis-id.component.css']
})
export class DevisIdComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private fournisseurService:FournisseurService
  ) { }

  devisId = this.route.snapshot.params['idD'];

  ngOnInit() {
  }

}
