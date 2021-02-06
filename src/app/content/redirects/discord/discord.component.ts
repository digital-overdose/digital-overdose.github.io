import { Component, OnInit } from '@angular/core';
import { BrowserRecognitionService } from 'src/app/services/browser-recognition.service';

@Component({
  selector: 'app-discord',
  templateUrl: './discord.component.html',
})
export class DiscordComponent implements OnInit {

  constructor(private browserRec: BrowserRecognitionService) { }

  ngOnInit(): void {
    if (this.browserRec.isBrowser) {
      window.location.replace('https://discord.gg/yTPvyub');
    }
  }

}
