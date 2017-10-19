import {Injectable} from '@angular/core';
import {LS_JWT_VAR} from "../constants";

@Injectable()
export class StorageService {

  constructor() {
  }

  save(key, val) {
    return window.localStorage.setItem(key, val);
  }

  get(key) {
    return window.localStorage.getItem(key);
  }

  saveJwt(token: string) {
    return this.save(LS_JWT_VAR, token);
  }

  getJwt(): string {
    return this.get(LS_JWT_VAR);
  }

}
