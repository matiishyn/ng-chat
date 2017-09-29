import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {User} from "../../models/user";

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) {
  }

  addUser(user: User) {
    const url = environment.API + 'users';
    this.http.post(url, user).subscribe(data => {
      // Read the result field from the JSON response.
      console.log(data);
    });
  }

}
