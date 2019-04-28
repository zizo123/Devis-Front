import { Devis } from "app/devis/models/devis";
import { Materiel } from "app/materiel/models/materiel";
import { Fournisseur } from "app/fournisseur/models/fournisseur";

export class Offre {

        id_offre:number;
        qte :number;
		prixFournisseur:number;
			materiel:Materiel
			fournisseur:Fournisseur;
			devis:Devis;	

	
	constructor(){	}
}