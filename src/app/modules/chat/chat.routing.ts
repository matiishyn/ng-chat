import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {ChatWrapperComponent} from "./components/chat-wrapper/chat-wrapper.component";
import {AuthGuardService as AuthGuard} from "../../services/auth-guard.service";

const routes: Routes = [
  {path: 'chat', component: ChatWrapperComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChatRoutingModule {
}
