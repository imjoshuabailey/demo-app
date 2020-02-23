import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  name = "";
  password = "";

  login() {
    alert(`your username is: ${this.name}, your password is: ${this.password}`);
  };
}
