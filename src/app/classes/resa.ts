import { Client } from "./client";
import { Hotel } from "./hotel";

export class Reservation {

    id: number | undefined;
    client: Client | undefined;
    hotel: Hotel | undefined;
    datedeb: Date | undefined;
    datefin: Date | undefined;
    num_chambre: number | undefined;
  
  
    constructor(
      _id?: number | undefined, _client?: Client | undefined, _hotel?: Hotel | undefined, _datedeb?: Date | undefined,
      _datefin?: Date | undefined, _num_chambre?: number | undefined
    ) {
      this.id = _id;
      this.client = _client;
      this.hotel = _hotel;
      this.datedeb = _datedeb;
      this.datefin = _datefin;
      this.num_chambre = _num_chambre;
    }
  }