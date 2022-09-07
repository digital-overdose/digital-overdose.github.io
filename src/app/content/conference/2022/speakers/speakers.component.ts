import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { interval } from 'rxjs';
import { startWith } from 'rxjs/operators';
import { speakers } from 'src/app/data/conference/2022/speakers';
import { BASE_URL } from 'src/app/data/url';
import { TeamMember } from 'src/app/interfaces/team-member';
import { BrowserRecognitionService } from 'src/app/services/browser-recognition.service';
import { MetaService } from 'src/app/services/meta.service';
import { diff } from 'src/app/utils/time-until';

@Component({
  templateUrl: './speakers.component.html',
  styleUrls: ['./_5p01l3r5.scss', '../../conference.components.scss', '../../../../../assets/css/team-card.scss'],
})
export class Conference2022SpeakersComponent implements OnInit {
  /** The list of team members, retrieved from data storage. */
  speakers: TeamMember[] = speakers;

  time: number[] = [0, 0, 0, 0];

  nowEpoch: number = new Date().getTime();
  releaseEpoch: number = 1647385200000;
  spoilers: boolean = false;

  /**
   * Creates an instance of ConferenceComponent.
   *
   * @param meta The HTML header metadata injection service.
   */
  constructor(private meta: MetaService, private browserRec: BrowserRecognitionService, private router: Router) { }

  /** Set the page metadata information. */
  ngOnInit(): void {
    if (this.router.url.includes('?spoilers')) {
      this.spoilers = true;
    }
    if (this.browserRec.isBrowser) {
      interval(1000).pipe(startWith(0)).subscribe(() => {
        this.nowEpoch = new Date().getTime();
        this.time = diff(this.releaseEpoch - this.nowEpoch);
      });
    }

    this.meta.setTags(`${BASE_URL}/conference/2022/speakers`, 'D.O. CON 2: Speakers',
                      `${BASE_URL}/assets/images/cover.jfif`, 750, 750,
                      ['conference', 'for', 'rookies', 'speakers', 'dovercon'],
                      'Digital Overdose Con! See these brand new faces...');
  }

  _5p01l3r5(): void {
    this.spoilers = true;
  }
}
