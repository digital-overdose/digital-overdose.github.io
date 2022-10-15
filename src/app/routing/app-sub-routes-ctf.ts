import { Routes } from '@angular/router';
import { Ctf2021AutumnComponent } from '../content/ctf/ctf2021-autumn/ctf2021-autumn.component';
import { Ctf2021SpringComponent } from '../content/ctf/ctf2021-spring/ctf2021-spring.component';
import { Ctf2022AutumnComponent } from '../content/ctf/ctf2022-autumn/ctf2022-autumn.component';
import { Ctf2022SpringComponent } from '../content/ctf/ctf2022-spring/ctf2022-spring.component';
import { AboutCTFComponent } from './../content/ctf/about/about.component';

export const subroutesCTF: Routes = [
  {
    path: '',
    redirectTo: '2022/autumn'
  },
  {
    path: 'about',
    component: AboutCTFComponent
  },
  {
    path: '2021/spring',
    component: Ctf2021SpringComponent
  },
  {
    path: '2021/autumn',
    component: Ctf2021AutumnComponent
  },
  {
    path: '2022/spring',
    component: Ctf2022SpringComponent
  },
  {
    path: '2022/autumn',
    component: Ctf2022AutumnComponent,
  },
];
