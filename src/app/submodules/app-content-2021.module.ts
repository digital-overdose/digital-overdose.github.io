import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { UnderConstructionComponent } from '../content/posts/2021/under-construction/under-construction.component';

@NgModule({
  declarations: [
  UnderConstructionComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class App2021Module { }
