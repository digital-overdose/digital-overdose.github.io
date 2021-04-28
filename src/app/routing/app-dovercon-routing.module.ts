import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { subroutesDovercon } from './app-sub-routes-dovercon-2021';

const routes: Route[] = subroutesDovercon;

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoverconRoutingModule { }
