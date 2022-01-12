import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared.module';
import { Conference2021TeamComponent } from '../content/conference/2021/team/team.component';
import { Conference2021MentorsComponent } from '../content/conference/2021/mentors/mentors.component';
import { Conference2021SpeakersComponent } from '../content/conference/2021/speakers/speakers.component';
import { Conference2021ScheduleComponent } from '../content/conference/2021/schedule/schedule.component';
import { Conference2021SponsoringComponent } from '../content/conference/2021/sponsoring/sponsoring.component';
import { Conference2021CfpComponent } from '../content/conference/2021/cfp/cfp.component';
import { Conference2021CodeOfConductComponent } from '../content/conference/2021/code-of-conduct/code-of-conduct.component';
import { Conference2021AfterpartyComponent } from '../content/redirects/afterparty/afterparty.component';
import { Conference2021AboutComponent } from '../content/conference/2021/conference.component';

@NgModule({
  declarations: [
    Conference2021AboutComponent,
    Conference2021TeamComponent,
    Conference2021MentorsComponent,
    Conference2021SpeakersComponent,
    Conference2021ScheduleComponent,
    Conference2021SponsoringComponent,
    Conference2021CfpComponent,
    Conference2021CodeOfConductComponent,
    Conference2021AfterpartyComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppConference2021Module { }
