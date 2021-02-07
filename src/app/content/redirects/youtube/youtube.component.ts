import { MetaService } from 'src/app/services/meta.service';
import { BASE_URL } from './../../../data/url';
import { BrowserRecognitionService } from './../../../services/browser-recognition.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html'
})
export class YoutubeComponent implements OnInit {

  constructor(private browserRec: BrowserRecognitionService, private meta: MetaService) { }

  ngOnInit(): void {
    this.meta.setTags(`${BASE_URL}/youtube`, 'Check our YouTube channel!',
                      `${BASE_URL}/assets/images/cover.jfif`, 750, 750,
                      ['youtube', 'community']);

    if (this.browserRec.isBrowser) {
      window.location.replace('https://www.youtube.com/channel/UCvTW4Eyt8xNbMEkFEEvFMIQ');
    }
  }


}
