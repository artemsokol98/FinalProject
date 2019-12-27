import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TimeService } from './time.service';
import { timer } from 'rxjs';
// import { axios } from 'axios';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  template: `<div>
  <router-outlet>
  <div><a href="/"><h1>На главную</h1></a></div>
<div class = "header">
  <div class="header_style" ><a href="/rooms">rooms</a></div>
  <div class="header_style" ><a href="/login">login</a></div>
</div>
   </router-outlet> </div>`
})
export class AppComponent {
  constructor(private http: HttpClient, private time: TimeService) { }
  title = 'meetingRooms';
  loginForm = new FormGroup({
    login: new FormControl(),
    password: new FormControl(),
  });
  db = '/api/db.json';


  /*showConfig() {
    this.time.getConfig()
      .subscribe( (db) => {
        this.db = db;
        console.log(this.db)
      });
  }*/
  login: string;
  password: string;
  dannie: object;

  Submit() {
    this.login = this.loginForm.controls.login.value;
    this.password = this.loginForm.controls.password.value;
    console.log(this.loginForm.controls.login.value);
    console.log(this.loginForm.controls.password.value);
    this.http.get('http://localhost:3000/users?login=' + this.login + '&password=' + this.password)
      .subscribe(result => { this.dannie = result; });
    console.log(this.dannie);
  }
}
export class Dunebook {
  id: number;
  login: string;
  password: string;
  email: string;
}
