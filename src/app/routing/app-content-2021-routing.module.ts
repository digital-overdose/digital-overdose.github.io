import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { subroutes2021 } from './app.sub-routes-2021';

@NgModule({
  imports: [RouterModule.forChild(subroutes2021)],
  exports: [RouterModule]
})
export class Posts2021RoutingModule { }
