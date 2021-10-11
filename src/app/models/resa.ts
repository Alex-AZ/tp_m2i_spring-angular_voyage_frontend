import { Client } from "./client";
import { Hotel } from "./hotel";

export class Reservation {

  id: number | undefined;
  client: Client | undefined;
  hotel: Hotel | undefined;
  datedeb: Date | undefined;
  datefin: Date | undefined;
  numChambre: number | undefined;


  constructor(
    _id?: number | undefined, _client?: Client | undefined, _hotel?: Hotel | undefined, _datedeb?: Date | undefined,
    _datefin?: Date | undefined, _numChambre?: number | undefined
  ) {
    this.id = _id;
    this.client = _client;
    this.hotel = _hotel;
    this.datedeb = _datedeb;
    this.datefin = _datefin;
    this.numChambre = _numChambre;
  }
}