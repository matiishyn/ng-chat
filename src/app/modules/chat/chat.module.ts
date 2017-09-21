import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ChatWrapperComponent} from './components/chat-wrapper/chat-wrapper.component';
import {ChatRoutingModule} from "./chat.routing";

@NgModule({
  imports: [
    CommonModule,
    ChatRoutingModule
  ],
  declarations: [ChatWrapperComponent]
})
export class ChatModule {
}
