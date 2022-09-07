import { Component, OnInit } from '@angular/core';
import { BASE_URL } from 'src/app/data/url';
import { BrowserRecognitionService } from 'src/app/services/browser-recognition.service';
import { MetaService } from 'src/app/services/meta.service';

@Component({
  selector: 'app-afterparty',
  templateUrl: './afterparty.component.html',
  styleUrls: []
})
export class Conference2021AfterpartyComponent implements OnInit {

/**
   * Creates an instance of DiscordComponent.
   *
   * @param browserRec The inBrowser detection service.
   * @param meta The HTML header metadata injection service.
   */
 constructor(private browserRec: BrowserRecognitionService, private meta: MetaService) { }

 /** Sets the page metadata information and redirects to the Discord server if inBrowser. */
 ngOnInit(): void {
   this.meta.setTags(`${BASE_URL}/afterparty`, 'The Afterparty!',
                     `${BASE_URL}/assets/images/cover.jfif`, 750, 750,
                     ['music']);

   if (this.browserRec.isBrowser) {
     window.location.replace('https://youtu.be/O7Tt8mhStHI');
   }
 }

}
