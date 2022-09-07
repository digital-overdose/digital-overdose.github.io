import { BASE_URL } from 'src/app/data/url';
import { MetaService } from 'src/app/services/meta.service';
import { Component, OnInit } from '@angular/core';
import { BrowserRecognitionService } from 'src/app/services/browser-recognition.service';
import { interval } from 'rxjs';
import { startWith } from 'rxjs/operators';
import { diff } from 'src/app/utils/time-until';

/**
 * Displays information on the Digital Overdose conference.
 *
 * @export
 */
@Component({
  selector: 'app-conference-2022',
  templateUrl: './conference.component.html',
  styleUrls: ['../conference.components.scss']
})
export class Conference2022AboutComponent implements OnInit {
  time: number[] = [0, 0, 0, 0];

  nowEpoch: number = new Date().getTime();
  releaseEpoch: number = 1646607600000;

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

    this.meta.setTags(`${BASE_URL}/conference`, 'Digital Overdose Conference: For Rookies',
                      `${BASE_URL}/assets/images/cover.jfif`, 750, 750,
                      ['conference', 'for', 'rookies'],
                      'Digital Overdose is running its second community-driven conference !');
  }
}
