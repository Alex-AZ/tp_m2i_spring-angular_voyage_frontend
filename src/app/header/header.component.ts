import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationGuard } from '../authentification.guard';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user : any;

  constructor(public router: Router, public guard: AuthentificationGuard) { }

  ngOnInit() {
    this.user = sessionStorage.getItem("connectedAdmin");
  }

  onLogout(): void {
    sessionStorage.removeItem("connectedAdmin");
    this.router.navigate(['login']);
  }

}
