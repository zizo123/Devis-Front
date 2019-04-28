import { Fournisseur } from "app/fournisseur/models/fournisseur";

export class Devis {
	id_devis:number;
	dateCreation:Date;
	reference:string;
	etat_devis:string;
	public fournisseurD:Fournisseur;
	
	constructor(){
		
	}
}