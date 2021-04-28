import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared.module';
import { Ctf2021Component } from '../content/ctf/ctf2021/ctf2021.component';
import { AboutCTFComponent } from '../content/ctf/about/about.component';
import { CTFLogoComponent } from '../content/ctf/logo/logo.component';
import { HeaderComponent } from '../content/ctf/header/header.component';

@NgModule({
  declarations: [
    Ctf2021Component,
    AboutCTFComponent,
    CTFLogoComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppCTFModule { }
