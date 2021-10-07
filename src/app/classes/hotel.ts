export class Hotel {

    id: number | undefined;
    nom: string | undefined;
    etoiles: number | undefined;
    adresse: string | undefined;
    telephone: string | undefined;
    email: string | undefined;
    ville: string | undefined;
    
  
    constructor(
        _id?: number | undefined, _nom?: string | undefined, _etoiles?: number | undefined, _adresse?: string | undefined,
        _telephone?: string | undefined, _email?: string | undefined, _ville?: string | undefined 
        ) {
      this.id = _id;
      this.nom = _nom;
      this.etoiles = _etoiles;
      this.adresse = _adresse;
      this.telephone = _telephone;
      this.email = _email;
      this.ville = _ville;
    }
}