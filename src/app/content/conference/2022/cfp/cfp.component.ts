import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { startWith } from 'rxjs/operators';
import { BASE_URL } from 'src/app/data/url';
import { BrowserRecognitionService } from 'src/app/services/browser-recognition.service';
import { MetaService } from 'src/app/services/meta.service';
import { diff } from 'src/app/utils/time-until';

@Component({
  templateUrl: './cfp.component.html',
  styleUrls: ['../../conference.components.scss']
})
export class Conference2022CfpComponent implements OnInit {
  /**
   * Creates an instance of ConferenceComponent.
   *
   * @param meta The HTML header metadata injection service.
   */
  constructor(private browserRec: BrowserRecognitionService, private meta: MetaService) { }

  time: number[] = [0, 0, 0, 0];
  time2: number[] = [0, 0, 0, 0];

  nowEpoch: number = new Date().getTime();
  releaseEpoch: number = 1643670000000;
  expireEpoch: number = 1646434800000;

  /** Set the page metadata information. */
  ngOnInit(): void {
    if (this.browserRec.isBrowser) {
      interval(1000).pipe(startWith(0)).subscribe(() => {
        this.nowEpoch = new Date().getTime();
        this.time = diff(this.releaseEpoch - this.nowEpoch);
        this.time2 = diff(this.expireEpoch - this.nowEpoch);
      });
    }


    this.meta.setTags(`${BASE_URL}/conference/2022/cfp`, 'D.O. CON 2: CFP',
                      `${BASE_URL}/assets/images/cover.jfif`, 750, 750,
                      ['conference', 'for', 'rookies', 'cfp', 'dovercon'],
                      'Digital Overdose Con! Propose a talk and join us!');
  }
}
