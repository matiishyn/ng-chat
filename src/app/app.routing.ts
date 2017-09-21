import {RouterModule, Routes} from "@angular/router";
import {NotFoundComponent} from "./components/not-found/not-found.component";
import {NgModule} from "@angular/core";

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  //{path: 'no', component: NotFoundComponent},
  // {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
