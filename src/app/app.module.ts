import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './components/app/app.component';
import {NotFoundComponent} from './components/not-found/not-found.component';
import {AppRoutingModule} from "./app.routing";
import {ChatModule} from "./modules/chat/chat.module";
import {AuthModule} from "./modules/auth/auth.module";

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChatModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
