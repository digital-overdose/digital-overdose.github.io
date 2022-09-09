import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { subroutes2022 } from './app-sub-routes-2022';

@NgModule({
  imports: [RouterModule.forChild(subroutes2022)],
  exports: [RouterModule]
})
export class Posts2022RoutingModule { }
