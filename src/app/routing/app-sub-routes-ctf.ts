import { Routes } from '@angular/router';
import { AboutCTFComponent } from './../content/ctf/about/about.component';
import { Ctf2021Component } from '../content/ctf/ctf2021/ctf2021.component';

export const subroutesCTF: Routes = [
  {
    path: '',
    component: AboutCTFComponent
  },
  {
    path: '2021-01',
    component: Ctf2021Component
  },
];
