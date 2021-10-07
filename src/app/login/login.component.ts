import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  error: boolean = false;

  a = {
    username: "",
    password: ""
  }

  constructor(private as: AdminService, private router: Router) { }

  ngOnInit() {
  }

  authenticate() {
    this.as.authenticate(this.a).subscribe(
      data => {
        console.log(data);
        if (data.id > 0) {
          sessionStorage.setItem("connectedAdmin", data);
          console.log("redirection");
          this.router.navigate(['dashboard'])
        } else {
          this.error = true;
        }
      },
      error => {
        this.error = true;
      }
    );
  }

}
