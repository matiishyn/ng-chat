import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {User} from "../../models/user";
import {JWT_HEADER} from "../../constants";
import {StorageService} from "../../services/storage.service";
import "rxjs/add/operator/map";

@Injectable()
export class AuthService {

  constructor(private http: HttpClient, private storage:StorageService) {
  }

  addUser(user: User) {
    const url = environment.API + 'users';
    return this.http.post(url, user, {observe: 'response'})
      .map((response:any) => {
        const token = response.headers.get(JWT_HEADER);
        this.storage.saveJwt(token);
        return response.body;
      });
  }

  test() {
    const url = environment.API + 'users';
    this.http.get(url).subscribe(data => {
      // Read the result field from the JSON response.
      // this.results = data['results'];

    });
  }

}
