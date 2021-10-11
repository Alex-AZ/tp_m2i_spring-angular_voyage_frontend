export class Client {

  id: number | undefined;
  nomComplet: string | undefined;
  telephone: string | undefined;
  email: string | undefined;
  adresse: string | undefined;

  constructor(
    _id?: number | undefined, _nomComplet?: string | undefined,
    _telephone?: string | undefined, _email?: string | undefined, _adresse?: string | undefined
  ) {
    this.id = _id;
    this.nomComplet = _nomComplet;
    this.telephone = _telephone;
    this.email = _email;
    this.adresse = _adresse;
  }
}