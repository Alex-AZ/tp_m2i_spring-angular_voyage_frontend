import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Hotel } from '../models/hotel';
import { httpOptions } from '../variables';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  constructor(private http: HttpClient) { }

  loadHotels(): Observable<Hotel[]> {
    return this.http.get<Hotel[]>(environment.apiUrl + "hotel", httpOptions);
  }

  addHotel(hotel: Hotel): Observable<Hotel> {
    return this.http.post<Hotel>(environment.apiUrl + "hotel", hotel, httpOptions);
  }

  editHotel(hotel: Hotel): Observable<Hotel> {
    return this.http.put<Hotel>(environment.apiUrl + "hotel/" + hotel.id, hotel, httpOptions);
  }

  deleteHotel(id?: number): Observable<any> {
    return this.http.delete<Hotel>(environment.apiUrl + "hotel/" + id, httpOptions);
  }

  getHotel(id?: number): Observable<Hotel> {
    return this.http.get<Hotel>(environment.apiUrl + "hotel/" + id, httpOptions);
  }

}
