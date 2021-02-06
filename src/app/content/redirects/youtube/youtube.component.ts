import { BrowserRecognitionService } from './../../../services/browser-recognition.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html'
})
export class YoutubeComponent implements OnInit {

  constructor(private browserRec: BrowserRecognitionService) { }


  ngOnInit(): void {
    if (this.browserRec.isBrowser) {
      window.location.replace('https://www.youtube.com/channel/UCvTW4Eyt8xNbMEkFEEvFMIQ');
    }
  }


}
