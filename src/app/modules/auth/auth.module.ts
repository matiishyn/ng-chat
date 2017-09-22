import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './components/login/login.component';
import {AuthRoutingModule} from "./auth.routing";
import {AuthWrapperComponent} from './components/auth-wrapper/auth-wrapper.component';
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    AuthRoutingModule
  ],
  declarations: [LoginComponent, AuthWrapperComponent]
})
export class AuthModule {
}
