import { Component, OnInit } from '@angular/core';
import { BASE_URL } from 'src/app/data/url';
import { MetaService } from 'src/app/services/meta.service';
import { interval } from 'rxjs';
import { startWith } from 'rxjs/operators';
import { diff } from 'src/app/utils/time-until';
import { BrowserRecognitionService } from 'src/app/services/browser-recognition.service';
import { ScheduleElement } from 'src/app/interfaces/schedule-element';
import { schedule } from 'src/app/data/dovercon/2021/schedule';
@Component({
  templateUrl: './schedule.component.html',
  styleUrls: ['../../conference.component.scss', '../../../../../assets/css/team-card.scss', './schedule.component.scss']
})
export class Dovercon2021ScheduleComponent implements OnInit {
  schedule: ScheduleElement[] = schedule;
  day11: ScheduleElement[] = schedule.filter(x => x.portion === 1);
  day12: ScheduleElement[] = schedule.filter(x => x.portion === 2);
  day21: ScheduleElement[] = schedule.filter(x => x.portion === 3);
  day22: ScheduleElement[] = schedule.filter(x => x.portion === 4);

  time: number[] = [0, 0, 0, 0];

  nowEpoch: number = new Date().getTime();
  releaseEpoch: number = 1617444000000;

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

    this.meta.setTags(`${BASE_URL}/dovercon/schedule-edition-2021`, 'DOVERCON2021: Schedule',
                      `${BASE_URL}/assets/images/cover.jfif`, 750, 750,
                      ['conference', 'for', 'rookies', 'schedule', 'dovercon'],
                      'Digital Overdose Con! Check out who and when will be on a YouTube stream near you, soon...');
  }
}
