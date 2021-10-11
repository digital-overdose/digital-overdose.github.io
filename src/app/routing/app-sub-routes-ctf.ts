import { Routes } from '@angular/router';
import { AboutCTFComponent } from './../content/ctf/about/about.component';
import { Ctf2021SpringComponent } from '../content/ctf/ctf2021-spring/ctf2021-spring.component';
import { Ctf2021AutumnComponent as Ctf2021AutumnComponent } from '../content/ctf/ctf2021-autumn/ctf2021-autumn.component';

export const subroutesCTF: Routes = [
  {
    path: '',
    redirectTo: '2021-autumn'
  },
  {
    path: 'about',
    component: AboutCTFComponent
  },
  {
    path: '2021-spring',
    component: Ctf2021SpringComponent
  },
  {
    path: '2021-autumn',
    component: Ctf2021AutumnComponent
  },
];
