import { Component, OnInit, ViewChild } from '@angular/core';
import { Client } from '../classes/client';
import { ClientService } from '../services/client.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  clients: Array<Client> = [];
  client: Client = new Client();

  @ViewChild('closebutton') closebuttonelement: any;

  error: boolean = false;

  constructor(public cs: ClientService) { }

  ngOnInit(): void {
    this.loadClient();
  }

  loadClient(): void {
    this.cs.loadClients().subscribe(
      data => {
        this.clients = data;
      }
    );
  }

  submitFormClient(): void {
    if (this.client.id == undefined) {
      this.cs.addClient(this.client).subscribe(
        data => {
          this.closebuttonelement.nativeElement.click();
          this.loadClient();
        },
        error => {
          this.error = true;
        }
      );
    } else {
      this.cs.editClient(this.client).subscribe(
        data => {
          this.closebuttonelement.nativeElement.click();
          this.loadClient();
        },
        error => {
          this.error = true;
        }
      );
    }
  }

  edit(id?: number): void {
    this.cs.getClient(id).subscribe(
      data => {
        this.client = data;
      }, 
      error => {
        this.error = true;
      }
    );
  }

  resetForm() {
    this.error = false;
    /* this.appC.success = false; */
    this.client = new Client();
  }

  delete(id?: number): void {
    if (confirm("Êtes-vous sûr ?")) {
      this.cs.deleteClient(id).subscribe(
        data => {
          this.loadClient();
          /* this.appC.success = true; */
        }
      );
    }
  }

}
