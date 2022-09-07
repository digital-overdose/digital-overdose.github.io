import { Routes } from '@angular/router';
import { Conference2022CfpComponent } from '../content/conference/2022/cfp/cfp.component';
import { Conference2022CodeOfConductComponent } from '../content/conference/2022/code-of-conduct/code-of-conduct.component';
import { Conference2022AboutComponent } from '../content/conference/2022/conference.component';
import { Conference2022MentorsComponent } from '../content/conference/2022/mentors/mentors.component';
import { Conference2022ScheduleComponent } from '../content/conference/2022/schedule/schedule.component';
import { Conference2022SpeakersComponent } from '../content/conference/2022/speakers/speakers.component';
import { Conference2022SponsoringComponent } from '../content/conference/2022/sponsoring/sponsoring.component';
import { Conference2022TeamComponent } from '../content/conference/2022/team/team.component';

export const subroutesDOCon2022: Routes = [
  {
    path: 'about',
    component: Conference2022AboutComponent
  },
  {
    path: 'team',
    component: Conference2022TeamComponent,
  },
  {
    path: 'cfp',
    component: Conference2022CfpComponent,
  },
  {
    path: 'mentors',
    component: Conference2022MentorsComponent,
  },
  {
    path: 'speakers',
    component: Conference2022SpeakersComponent,
  },
  {
    path: 'schedule',
    component: Conference2022ScheduleComponent,
  },
  {
    path: 'sponsoring',
    component: Conference2022SponsoringComponent,
  },
  {
    path: 'code-of-conduct',
    component: Conference2022CodeOfConductComponent,
  },
];
