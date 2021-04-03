import { Component, OnInit } from '@angular/core';
import { BASE_URL } from 'src/app/data/url';
import { MetaService } from 'src/app/services/meta.service';
import { interval } from 'rxjs';
import { startWith } from 'rxjs/operators';
import { diff } from 'src/app/utils/time-until';
import { BrowserRecognitionService } from 'src/app/services/browser-recognition.service';
@Component({
  templateUrl: './schedule.component.html',
  styleUrls: ['../../conference.component.scss']
})
export class Dovercon2021ScheduleComponent implements OnInit {
  time: number[] = [0, 0, 0, 0];

  nowEpoch: number = new Date().getTime();
  releaseEpoch: number = 1617364800000;

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
