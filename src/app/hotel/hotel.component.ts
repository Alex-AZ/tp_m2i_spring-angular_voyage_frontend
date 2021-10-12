import { Component, OnInit, ViewChild } from '@angular/core';
import { AppComponent } from '../app.component';
import { Hotel } from '../models/hotel';
import { HotelService } from '../services/hotel.service';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {

  hotels: Array<Hotel> = [];
  hotel: Hotel = new Hotel();

  @ViewChild('closebutton') closebuttonelement: any;

  error: boolean = false;

  search: String = "";

  constructor(public hs: HotelService, private ac: AppComponent) { }

  ngOnInit(): void {
    this.loadHotel();
  }

  loadHotel(): void {
    this.hs.loadHotels().subscribe(
      data => {
        this.hotels = data;
      }
    );
  }

  submitFormHotel(): void {
    if (this.hotel.id == undefined) {
      this.hs.addHotel(this.hotel).subscribe(
        data => {
          this.closebuttonelement.nativeElement.click();
          this.loadHotel();
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
      this.hs.editHotel(this.hotel).subscribe(
        data => {
          this.closebuttonelement.nativeElement.click();
          this.loadHotel();
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
    this.hs.getHotel(id).subscribe(
      data => {
        this.hotel = data;
      }, 
      error => {
        this.error = true;
      }
    );
  }

  resetForm() {
    this.error = false;
    this.ac.success = false;
    this.hotel = new Hotel();
  }

  delete(id?: number): void {
    if (confirm("Êtes-vous sûr ?")) {
      this.hs.deleteHotel(id).subscribe(
        data => {
          this.loadHotel();
          this.ac.success = true;
          setTimeout(() => {
            this.ac.success = false;
          }, 5000);
        }
      );
    }
  }

}
