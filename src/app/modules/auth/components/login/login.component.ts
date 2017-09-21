import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  model = {
    username: '',
    password: ''
  };

  onSubmit() {
    console.log('subm', this.model);
  }

}
