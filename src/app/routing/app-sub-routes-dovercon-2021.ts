import { Dovercon2021CodeOfConductComponent } from '../content/conference/2021/code-of-conduct/code-of-conduct.component';
import { Routes } from '@angular/router';
import { Dovercon2021CfpComponent } from '../content/conference/2021/cfp/cfp.component';
import { Dovercon2021MentorsComponent } from '../content/conference/2021/mentors/mentors.component';
import { Dovercon2021ScheduleComponent } from '../content/conference/2021/schedule/schedule.component';
import { Dovercon2021SpeakersComponent } from '../content/conference/2021/speakers/speakers.component';
import { Dovercon2021SponsoringComponent } from '../content/conference/2021/sponsoring/sponsoring.component';
import { Dovercon2021TeamComponent } from '../content/conference/2021/team/team.component';
import { Dovercon2021AboutComponent } from '../content/conference/2021/conference.component';

export const subroutesDovercon2021: Routes = [
  {
    path: 'about',
    component: Dovercon2021AboutComponent
  },
  {
    path: 'team',
    component: Dovercon2021TeamComponent,
  },
  {
    path: 'cfp',
    component: Dovercon2021CfpComponent
  },
  {
    path: 'mentors',
    component: Dovercon2021MentorsComponent,
  },
  {
    path: 'speakers',
    component: Dovercon2021SpeakersComponent,
  },
  {
    path: 'schedule',
    component: Dovercon2021ScheduleComponent,
  },
  {
    path: 'sponsoring',
    component: Dovercon2021SponsoringComponent,
  },
  {
    path: 'code-of-conduct',
    component: Dovercon2021CodeOfConductComponent,
  },
];
