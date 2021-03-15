import { Component, OnInit } from '@angular/core';
import { speakers } from 'src/app/data/dovercon/2021/speakers';
import { BASE_URL } from 'src/app/data/url';
import { TeamMember } from 'src/app/interfaces/team-member';
import { MetaService } from 'src/app/services/meta.service';
import { interval } from 'rxjs';
import { startWith } from 'rxjs/operators';
import { diff } from 'src/app/utils/time-until';
import { BrowserRecognitionService } from 'src/app/services/browser-recognition.service';

@Component({
  templateUrl: './speakers.component.html',
  styleUrls: ['../../conference.component.scss']
})
export class Dovercon2021SpeakersComponent implements OnInit {
  /** The list of team members, retrieved from data storage. */
  speakers: TeamMember[] = speakers;

  time: number[] = [0, 0, 0, 0];

  nowEpoch: number = new Date().getTime();
  releaseEpoch: number = 1615892400000;

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

    this.meta.setTags(`${BASE_URL}/dovercon/speakers-edition-2021`, 'DOVERCON2021: Speakers',
                      `${BASE_URL}/assets/images/cover.jfif`, 750, 750,
                      ['conference', 'for', 'rookies', 'speakers', 'dovercon'],
                      'Digital Overdose Con! See these brand new faces...');
  }
}
