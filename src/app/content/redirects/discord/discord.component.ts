import { Component, OnInit } from '@angular/core';
import { BASE_URL } from 'src/app/data/url';
import { BrowserRecognitionService } from 'src/app/services/browser-recognition.service';
import { MetaService } from 'src/app/services/meta.service';

@Component({
  selector: 'app-discord',
  templateUrl: './discord.component.html',
})
export class DiscordComponent implements OnInit {

  constructor(private browserRec: BrowserRecognitionService, private meta: MetaService) { }

  ngOnInit(): void {
    this.meta.setTags(`${BASE_URL}/discord`, 'Join our Discord!',
                      `${BASE_URL}/assets/images/cover.jfif`, 750, 750,
                      ['discord', 'community']);

    if (this.browserRec.isBrowser) {
      window.location.replace('https://discord.gg/yTPvyub');
    }
  }
}
