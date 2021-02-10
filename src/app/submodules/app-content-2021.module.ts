import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FebHelloWorldComponent } from 'src/app/content/posts/2021/feb-hello-world/feb-hello-world.component';

@NgModule({
  declarations: [
    FebHelloWorldComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class App2021Module { }
