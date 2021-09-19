import { Routes } from '@angular/router';
import { AboutCTFComponent } from './../content/ctf/about/about.component';
import { Ctf2021Component } from '../content/ctf/ctf2021/ctf2021.component';
import { Ctf2021AutumnComponent as Ctf2021AutumnComponent } from '../content/ctf/ctf2021-autumn/ctf2021-autumn.component';

export const subroutesCTF: Routes = [
  {
    path: '',
    component: AboutCTFComponent
  },
  {
    path: '2021-spring',
    component: Ctf2021Component
  },
  {
    path: '2021-autumn',
    component: Ctf2021AutumnComponent
  },
];
