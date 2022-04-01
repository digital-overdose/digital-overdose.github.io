import { BASE_URL } from './../../../data/url';
import { MetaService } from './../../../services/meta.service';
import { Component, OnInit } from '@angular/core';
import { Mentor } from 'src/app/interfaces/mentor';
import { BrowserRecognitionService } from 'src/app/services/browser-recognition.service';
import { interval } from 'rxjs';
import { startWith } from 'rxjs/operators';
import { diff } from 'src/app/utils/time-until';
import { sponsorsCTFAutumn2021 } from 'src/app/data/ctf/2021/autumn/sponsors';

@Component({
  selector: 'app-ctf2021',
  templateUrl: './ctf2021-autumn.component.html',
  styleUrls: ['../ctf.components.scss', '../../../../assets/css/team-card.scss', './ctf2021-autumn.component.scss']
})
export class Ctf2021AutumnComponent implements OnInit {
  sponsors: Mentor[] = sponsorsCTFAutumn2021;
  time: number[] = [0, 0, 0, 0];

  nowEpoch: number = new Date().getTime();
  releaseEpoch: number = 1633730400000;

  constructor(private meta: MetaService, private browserRec: BrowserRecognitionService) { }

  ngOnInit(): void {
    if (this.browserRec.isBrowser) {
      interval(1000).pipe(startWith(0)).subscribe(() => {
        this.nowEpoch = new Date().getTime();
        this.time = diff(this.releaseEpoch - this.nowEpoch);
      });
    }

    this.meta.setTags(`${BASE_URL}/ctf/2021/autumn`, 'Digital Overdose Autumn 2021 CTF',
      `${BASE_URL}/assets/images/cover.jfif`, 750, 750,
      ['capture the flag', 'ctf', 'cybersecurity'],
      'Digital Overdose is running a virtual Capture the Flag challenge! Dates: Oct. 9th (00:00:00 GMT+2) - Oct. 10th (23:59:59 GMT+2');
  }


}
