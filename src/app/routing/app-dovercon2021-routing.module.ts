import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { subroutesDovercon2021 } from './app-sub-routes-dovercon-2021';

const routes: Route[] = subroutesDovercon2021;

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Dovercon2021RoutingModule { }
