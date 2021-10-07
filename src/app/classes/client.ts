export class Client {

    id: number | undefined;
    nom_complet: string | undefined;
    telephone: string | undefined ;
    email: string | undefined;
    adresse: string | undefined ;
  
    constructor(
        _id?: number | undefined, _nom_complet?: string | undefined,
        _telephone?: string | undefined, _email?: string | undefined, _adresse?: string | undefined 
        ) {
      this.id = _id;
      this.nom_complet = _nom_complet;
      this.telephone = _telephone;
      this.email = _email;
      this.adresse = _adresse;
    }
  
  }