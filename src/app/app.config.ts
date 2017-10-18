import {JwtModuleOptions} from "@auth0/angular-jwt";
import {JWT_HEADER, LS_JWT_VAR} from "./constants";
import {environment} from "../environments/environment";

export function tokenGetter() {
  return localStorage.getItem(LS_JWT_VAR);  // todo change to use Storage service
}

export const jwtModuleConfig: JwtModuleOptions = {
  config: {
    headerName: JWT_HEADER,
    tokenGetter: tokenGetter,
    whitelistedDomains: [environment.API_DOMAIN]
  }
};
