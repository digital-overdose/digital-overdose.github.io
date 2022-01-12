import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared.module';
import { Conference2022CfpComponent } from '../content/conference/2022/cfp/cfp.component';
import { Conference2022CodeOfConductComponent } from '../content/conference/2022/code-of-conduct/code-of-conduct.component';
import { Conference2022AboutComponent } from '../content/conference/2022/conference.component';
import { Conference2022MentorsComponent } from '../content/conference/2022/mentors/mentors.component';
import { Conference2022ScheduleComponent } from '../content/conference/2022/schedule/schedule.component';
import { Conference2022SpeakersComponent } from '../content/conference/2022/speakers/speakers.component';
import { Conference2022SponsoringComponent } from '../content/conference/2022/sponsoring/sponsoring.component';
import { Conference2022TeamComponent } from '../content/conference/2022/team/team.component';

@NgModule({
  declarations: [
    Conference2022AboutComponent,
    Conference2022TeamComponent,
    Conference2022MentorsComponent,
    Conference2022SpeakersComponent,
    Conference2022ScheduleComponent,
    Conference2022SponsoringComponent,
    Conference2022CfpComponent,
    Conference2022CodeOfConductComponent,
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppConference2022Module { }
