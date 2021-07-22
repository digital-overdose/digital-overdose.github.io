import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared.module';
import { Dovercon2021TeamComponent } from '../content/conference/2021/team/team.component';
import { Dovercon2021MentorsComponent } from '../content/conference/2021/mentors/mentors.component';
import { Dovercon2021SpeakersComponent } from '../content/conference/2021/speakers/speakers.component';
import { Dovercon2021ScheduleComponent } from '../content/conference/2021/schedule/schedule.component';
import { Dovercon2021SponsoringComponent } from '../content/conference/2021/sponsoring/sponsoring.component';
import { Dovercon2021CfpComponent } from '../content/conference/2021/cfp/cfp.component';
import { Dovercon2021CodeOfConductComponent } from '../content/conference/2021/code-of-conduct/code-of-conduct.component';
import { Dovercon2021AfterpartyComponent } from '../content/redirects/afterparty/afterparty.component';
import { Dovercon2021AboutComponent } from '../content/conference/2021/conference.component';

@NgModule({
  declarations: [
    Dovercon2021AboutComponent,
    Dovercon2021TeamComponent,
    Dovercon2021MentorsComponent,
    Dovercon2021SpeakersComponent,
    Dovercon2021ScheduleComponent,
    Dovercon2021SponsoringComponent,
    Dovercon2021CfpComponent,
    Dovercon2021CodeOfConductComponent,
    Dovercon2021AfterpartyComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppDovercon2021Module { }
