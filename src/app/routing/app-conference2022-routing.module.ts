import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { subroutesDovercon2022 } from './app-sub-routes-conference-2022';

const routes: Route[] = subroutesDovercon2022;

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Conference2022RoutingModule { }
