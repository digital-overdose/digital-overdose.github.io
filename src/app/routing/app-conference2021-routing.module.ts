import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { subroutesDOCon2021 } from './app-sub-routes-conference-2021';

const routes: Route[] = subroutesDOCon2021;

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Conference2021RoutingModule { }
