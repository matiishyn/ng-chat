import {Component, OnInit} from '@angular/core';
import {User} from "../../../../models/user";
import {AuthService} from "../../auth.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [AuthService]
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private toastr: ToastrService) {
  }

  ngOnInit() {
  }

  user: User = {
    username: '',
    password: ''
  };

  onSubmit() {
  }

  onRegister() {
    this.authService.addUser(this.user)
      .subscribe(resp => {
        console.log('success');
        this.toastr.success('Successfully registered and logged in');
      }, (err) => {
        console.log('error');
        this.toastr.error(
          'Most likely that username you are trying to use is already used. Try another one',
          'Server error!'
        );
      });
  }

  onTest() {
    console.log('test');
    this.authService.test();
  }

}
