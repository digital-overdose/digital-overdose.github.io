import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { interval } from 'rxjs';
import { startWith } from 'rxjs/operators';
import { schedule } from 'src/app/data/conference/2022/schedule';
import { BASE_URL } from 'src/app/data/url';
import { ScheduleElement } from 'src/app/interfaces/schedule-element';
import { BrowserRecognitionService } from 'src/app/services/browser-recognition.service';
import { MetaService } from 'src/app/services/meta.service';
import { diff } from 'src/app/utils/time-until';

@Component({
  templateUrl: './schedule.component.html',
  styleUrls: ['../../conference.components.scss', '../../../../../assets/css/team-card.scss', './schedule.component.scss']
})
export class Conference2022ScheduleComponent implements OnInit {
  schedule: ScheduleElement[] = schedule;
  day11: ScheduleElement[] = schedule.filter(x => x.portion === 1);
  day12: ScheduleElement[] = schedule.filter(x => [2, 3].includes(x.portion));
  day21: ScheduleElement[] = schedule.filter(x => x.portion === 4);
  day22: ScheduleElement[] = schedule.filter(x => [5, 6].includes(x.portion));
  day23: ScheduleElement[] = [
    {
      speakers: [
        {
          name: 'Miss Jackalope',
          links: [
            { label: 'Twitch', icon: 'fab fa-twitch', url: 'https://twitch.tv/missjackalope' },
            { label: 'Twitter', icon: 'fab fa-fw fa-twitter-square', url: 'https://twitter.com/djjackalope' },
            { label: 'Website', icon: 'fas fa-globe', url: 'http://www.missjackalope.com/' },
          ],
          description: 'Afterparty',
          imageUrl: '/assets/images/conference/2022/missjackalope.png'
        }
      ],
      portion: 7,
      start: new Date(1650825000000),
      end: new Date(1650830400000),
      startCEST: '20:30',
      endCEST: '22:00'
    },
  ]

  time: number[] = [0, 0, 0, 0];
  spoilers: boolean = false;

  nowEpoch: number = new Date().getTime();
  releaseEpoch: number = 1648533600000;

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

    this.meta.setTags(`${BASE_URL}/conference/2022/schedule`, 'D.O. CON 2: Schedule',
                      `${BASE_URL}/assets/images/cover.jfif`, 750, 750,
                      ['conference', 'for', 'rookies', 'schedule', 'dovercon'],
                      'Digital Overdose Con! Check out who and when will be on a YouTube stream near you, soon...');
  }
}
