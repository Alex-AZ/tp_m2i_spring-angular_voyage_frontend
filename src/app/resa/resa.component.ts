import { Component, OnInit, ViewChild } from '@angular/core';
import { AppComponent } from '../app.component';
import { Client } from '../models/client';
import { Hotel } from '../models/hotel';
import { Reservation } from '../models/resa';
import { ClientService } from '../services/client.service';
import { HotelService } from '../services/hotel.service';
import { ReservationService } from '../services/reservation.service';

@Component({
  selector: 'app-resa',
  templateUrl: './resa.component.html',
  styleUrls: ['./resa.component.css']
})
export class ResaComponent implements OnInit {

  resas: Array<Reservation> = [];
  resa: Reservation = new Reservation();

  clients: Array<Client> = [];
  hotels: Array<Hotel> = [];

  error: boolean = false;

  search: string = "";

  @ViewChild('closebutton') closebuttonelement: any;

  constructor(public rs: ReservationService, private cs: ClientService, private hs: HotelService, private ac: AppComponent) { }

  ngOnInit(): void {
    this.loadResa();

    this.cs.loadClients().subscribe(
      data => {
        this.clients = data;
      }
    );

    this.hs.loadHotels().subscribe(
      data => {
        this.hotels = data;
      }
    );
  }

  loadResa(): void {
    this.rs.loadResas(this.search).subscribe(
      data => {
        this.resas = data;
      }
    );
  }

  submitFormResa(): void {
    if (this.resa.id == undefined) {
      this.rs.addResa(this.resa).subscribe(
        data => {
          this.closebuttonelement.nativeElement.click();
          this.loadResa();
          this.ac.success = true;
          setTimeout(() => {
            this.ac.success = false;
          }, 5000);
        },
        error => {
          this.error = true;
        }
      );
    } else {
      this.rs.editResa(this.resa).subscribe(
        data => {
          this.closebuttonelement.nativeElement.click();
          this.loadResa();
          this.ac.success = true;
          setTimeout(() => {
            this.ac.success = false;
          }, 5000);
        },
        error => {
          this.error = true;
        }
      );
    }
  }

  edit(id?: number): void {
    this.rs.getResa(id).subscribe(
      data => {
        this.resa = data;
      }, 
      error => {
        this.error = true;
      }
    );
  }

  selectClient(c1: Client, c2: Client): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }

  selectHotel(h1: Hotel, h2: Hotel): boolean {
    return h1 && h2 ? h1.id === h2.id : h1 === h2;
  }

  resetForm() {
    this.error = false;
    this.ac.success = false;
    this.resa = new Reservation();
  }

  delete(id?: number): void {
    if (confirm("Êtes-vous sûr ?")) {
      this.rs.deleteResa(id).subscribe(
        data => {
          this.loadResa();
          this.ac.success = true;
          setTimeout(() => {
            this.ac.success = false;
          }, 5000);
        }
      );
    }
  }

}
