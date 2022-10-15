import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared.module';
import { AboutCTFComponent } from '../content/ctf/about/about.component';
import { Ctf2021AutumnComponent } from '../content/ctf/ctf2021-autumn/ctf2021-autumn.component';
import { Ctf2021SpringComponent } from '../content/ctf/ctf2021-spring/ctf2021-spring.component';
import { HeaderComponent } from '../content/ctf/header/header.component';
import { CTFLogoComponent } from '../content/ctf/logo/logo.component';
import { Ctf2022SpringComponent } from '../content/ctf/ctf2022-spring/ctf2022-spring.component';
import { Ctf2022AutumnComponent } from '../content/ctf/ctf2022-autumn/ctf2022-autumn.component';

@NgModule({
  declarations: [
    Ctf2021SpringComponent,
    Ctf2021AutumnComponent,
    Ctf2022SpringComponent,
    Ctf2022AutumnComponent,
    AboutCTFComponent,
    CTFLogoComponent,
    HeaderComponent,
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
