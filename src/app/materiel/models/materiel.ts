import { Fournisseur } from "app/fournisseur/models/fournisseur";

export class Materiel {  

	id_materiel:number;
	numMat:string;
	marque:string;
	description:string;
	prixMateriel:number;
	quantity: number;
	typeMateriel:string;
	public fournisseurM : Fournisseur;
	constructor(){}
	/*constructor(id_materiel:number,NumMat:String,marque:String,description:String,prix_materiel:number,type_materiel:String){
		this.id_materiel=id_materiel;
		this.NumMat=NumMat;
		this.marque=marque;
		this.description=description;
		this.prix_materiel=prix_materiel;
		this.type_materiel=type_materiel;
	}*/
}