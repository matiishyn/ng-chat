import {Component, OnInit} from '@angular/core';
import {User} from "../../../../models/user";
import {AuthService} from "../../auth.service";

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [AuthService]
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
  }

  user: User = {
    username: '',
    password: ''
  };

  onSubmit() {
    console.log('subm', this.user);
    this.authService.addUser(this.user);
  }

  onTest() {
    console.log('test');
    this.authService.test();
  }

}
