import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {ChatWrapperComponent} from "./components/chat-wrapper/chat-wrapper.component";

const routes: Routes = [
  {path: 'chat', component: ChatWrapperComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChatRoutingModule {
}
