import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Client } from '../classes/client';
import { httpOptions } from '../variables';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }

  loadClients(): Observable<Client[]> {
    console.log("Chargement des clients !");

    return this.http.get<Client[]>(environment.apiUrl + "client", httpOptions);
  }

  addClient(client: Client): Observable<Client> {
    return this.http.post<Client>(environment.apiUrl + "client", client, httpOptions);
  }

  editClient(client: Client): Observable<Client> {
    return this.http.put<Client>(environment.apiUrl + "client/" + client.id, client, httpOptions);
  }

  deleteClient(id?: number): Observable<any> {
    return this.http.delete<Client>(environment.apiUrl + "client/" + id, httpOptions);
  }

  getClient(id?: number): Observable<Client> {
    return this.http.get<Client>(environment.apiUrl + "client/" + id, httpOptions);
  }


}
