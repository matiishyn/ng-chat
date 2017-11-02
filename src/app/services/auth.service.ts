import {Injectable} from '@angular/core';
import {JwtHelperService} from '@auth0/angular-jwt';
import {StorageService} from "./storage.service";

@Injectable()
export class AuthService {

  constructor(public jwtHelper: JwtHelperService, public storage: StorageService) {
  }

  public isAuthenticated(): boolean {
    const token = this.storage.getJwt();
    // Check whether the token is expired and return
    // true or false
    return token && !this.jwtHelper.isTokenExpired(token);
  }

}
