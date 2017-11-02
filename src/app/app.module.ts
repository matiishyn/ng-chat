import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './components/app/app.component';
import {NotFoundComponent} from './components/not-found/not-found.component';
import {AppRoutingModule} from "./app.routing";
import {ChatModule} from "./modules/chat/chat.module";
import {AuthModule} from "./modules/auth/auth.module";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {HttpClientModule} from "@angular/common/http";
import {JwtModule} from "@auth0/angular-jwt";
import {StorageService} from "./services/storage.service";
import {jwtModuleConfig} from "./app.config";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastrModule} from 'ngx-toastr';
import {AuthService} from "./services/auth.service";
import {AuthGuardService} from "./services/auth-guard.service";

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    JwtModule.forRoot(jwtModuleConfig),   // https://github.com/auth0/angular2-jwt/tree/v1.0
    BrowserAnimationsModule,              // ngx-toastr requires animations module
    ToastrModule.forRoot({          // https://github.com/scttcper/ngx-toastr
      progressBar: true,
    }),
    NgbModule.forRoot(),
    AppRoutingModule,
    ChatModule,
    AuthModule
  ],
  providers: [
    StorageService,
    AuthService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
