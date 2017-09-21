import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {AuthWrapperComponent} from "./components/auth-wrapper/auth-wrapper.component";

const routes: Routes = [
  {path: 'login', component: AuthWrapperComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {
}
