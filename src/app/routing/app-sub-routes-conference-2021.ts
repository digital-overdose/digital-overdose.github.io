import { Routes } from '@angular/router';
import { Conference2021CfpComponent } from '../content/conference/2021/cfp/cfp.component';
import { Conference2021CodeOfConductComponent } from '../content/conference/2021/code-of-conduct/code-of-conduct.component';
import { Conference2021AboutComponent } from '../content/conference/2021/conference.component';
import { Conference2021MentorsComponent } from '../content/conference/2021/mentors/mentors.component';
import { Conference2021ScheduleComponent } from '../content/conference/2021/schedule/schedule.component';
import { Conference2021SpeakersComponent } from '../content/conference/2021/speakers/speakers.component';
import { Conference2021SponsoringComponent } from '../content/conference/2021/sponsoring/sponsoring.component';
import { Conference2021TeamComponent } from '../content/conference/2021/team/team.component';

export const subroutesDOCon2021: Routes = [
  {
    path: 'about',
    component: Conference2021AboutComponent
  },
  {
    path: 'team',
    component: Conference2021TeamComponent,
  },
  {
    path: 'cfp',
    component: Conference2021CfpComponent
  },
  {
    path: 'mentors',
    component: Conference2021MentorsComponent,
  },
  {
    path: 'speakers',
    component: Conference2021SpeakersComponent,
  },
  {
    path: 'schedule',
    component: Conference2021ScheduleComponent,
  },
  {
    path: 'sponsoring',
    component: Conference2021SponsoringComponent,
  },
  {
    path: 'code-of-conduct',
    component: Conference2021CodeOfConductComponent,
  },
];
