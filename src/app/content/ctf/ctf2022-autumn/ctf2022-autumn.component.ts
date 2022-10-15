import { BASE_URL } from 'src/app/data/url';
import { startWith } from 'rxjs/operators';
import { interval } from 'rxjs';
import { BrowserRecognitionService } from 'src/app/services/browser-recognition.service';
import { MetaService } from 'src/app/services/meta.service';
import { sponsorsCTFAutumn2022 } from 'src/app/data/ctf/2022/autumn/sponsors';
import { Mentor } from 'src/app/interfaces/mentor';
import { Component, OnInit } from '@angular/core';
import { diff } from 'src/app/utils/time-until';

@Component({
  selector: 'app-ctf2022-autumn',
  templateUrl: './ctf2022-autumn.component.html',
  styleUrls: ['./ctf2022-autumn.component.scss', '../../../../assets/css/team-card.scss', '../ctf.components.scss']
})
export class Ctf2022AutumnComponent implements OnInit {
  sponsors: Mentor[] = sponsorsCTFAutumn2022;
  time: number[] = [0, 0, 0, 0];

  nowEpoch: number = new Date().getTime();
  releaseEpoch: number = 1650664800000;

  constructor(private meta: MetaService, private browserRec: BrowserRecognitionService) { }

  ngOnInit(): void {
    if (this.browserRec.isBrowser) {
      interval(1000).pipe(startWith(0)).subscribe(() => {
        this.nowEpoch = new Date().getTime();
        this.time = diff(this.releaseEpoch - this.nowEpoch);
      });
    }

    this.meta.setTags(`${BASE_URL}/ctf/2022/autumn`, 'Digital Overdose Autumn 2022 CTF',
      `${BASE_URL}/assets/images/cover.jfif`, 750, 750,
      ['capture the flag', 'ctf', 'cybersecurity'],
      'Digital Overdose is running a virtual Capture the Flag challenge! Dates: Nov. 19th (00:00:00 GMT+1) - Nov. 20th (23:59:59 GMT+1');
  }
}
