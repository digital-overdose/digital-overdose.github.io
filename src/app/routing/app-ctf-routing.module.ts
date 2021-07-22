import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { subroutesCTF } from './app-sub-routes-ctf';

const routes: Route[] = subroutesCTF;

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CTFRoutingModule { }
