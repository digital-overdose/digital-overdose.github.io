import { Routes } from "@angular/router";
import { Dovercon2021CfpComponent } from "../content/conference/2021/cfp/cfp.component";
import { Dovercon2021MentorsComponent } from "../content/conference/2021/mentors/mentors.component";
import { Dovercon2021ScheduleComponent } from "../content/conference/2021/schedule/schedule.component";
import { Dovercon2021SpeakersComponent } from "../content/conference/2021/speakers/speakers.component";
import { Dovercon2021SponsoringComponent } from "../content/conference/2021/sponsoring/sponsoring.component";
import { Dovercon2021TeamComponent } from "../content/conference/2021/team/team.component";

export const subroutesDovercon: Routes = [
  {
    path: 'team-edition-2021',
    component: Dovercon2021TeamComponent,
  },
  {
    path: 'cfp-edition-2021',
    component: Dovercon2021CfpComponent
  },
  {
    path: 'mentors-edition-2021',
    component: Dovercon2021MentorsComponent,
  },
  {
    path: 'speakers-edition-2021',
    component: Dovercon2021SpeakersComponent,
  },
  {
    path: 'schedule-edition-2021',
    component: Dovercon2021ScheduleComponent,
  },
  {
    path: 'sponsoring-edition-2021',
    component: Dovercon2021SponsoringComponent,
  },
];
