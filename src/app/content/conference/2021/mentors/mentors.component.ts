import { Component, OnInit } from '@angular/core';
import { mentors } from 'src/app/data/dovercon/2021/mentors';
import { BASE_URL } from 'src/app/data/url';
import { TeamMember } from 'src/app/interfaces/team-member';
import { MetaService } from 'src/app/services/meta.service';
import { interval } from 'rxjs';
import { startWith } from 'rxjs/operators';
import { diff } from 'src/app/utils/time-until';
import { BrowserRecognitionService } from 'src/app/services/browser-recognition.service';

@Component({
  templateUrl: './mentors.component.html',
  styleUrls: ['../../conference.component.scss']
})
export class Dovercon2021MentorsComponent implements OnInit {
  /** The list of team members, retrieved from data storage. */
  mentors: TeamMember[] = mentors;

  time: number[] = [0, 0, 0, 0];

  nowEpoch: number = new Date().getTime();
  releaseEpoch: number = 1615978800000;
  /**
   * Creates an instance of ConferenceComponent.
   *
   * @param meta The HTML header metadata injection service.
   */
  constructor(private meta: MetaService, private browserRec: BrowserRecognitionService) { }

  /** Set the page metadata information. */
  ngOnInit(): void {
    if (this.browserRec.isBrowser) {
      interval(1000).pipe(startWith(0)).subscribe(() => {
        this.nowEpoch = new Date().getTime();
        this.time = diff(this.releaseEpoch - this.nowEpoch);
      });
    }

    this.meta.setTags(`${BASE_URL}/dovercon/schedule-edition-2021`, 'DOVERCON2021: Mentors',
                      `${BASE_URL}/assets/images/cover.jfif`, 750, 750,
                      ['conference', 'for', 'rookies', 'mentors', 'dovercon'],
                      'Digital Overdose Con! The team that will look after our speakers before the con...');
  }
}
