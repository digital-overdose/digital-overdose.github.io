import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { subroutes2021 } from './app.sub-routes-2021';

/** The routes for all posts of the year 2021. */
const routes: Route[] = subroutes2021;

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Posts2021RoutingModule { }
