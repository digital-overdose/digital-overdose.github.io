import { Component, OnInit } from '@angular/core';
import { BASE_URL } from 'src/app/data/url';
import { BrowserRecognitionService } from 'src/app/services/browser-recognition.service';
import { MetaService } from 'src/app/services/meta.service';

/**
 * Redirects the page to Digital Overdose's Discord server.
 *
 * @export
 */
@Component({
  selector: 'app-cfpform',
  templateUrl: './cfpform.component.html',
})
export class CfpFormComponent implements OnInit {
  /**
   * Creates an instance of DiscordComponent.
   *
   * @param browserRec The inBrowser detection service.
   * @param meta The HTML header metadata injection service.
   */
  constructor(private browserRec: BrowserRecognitionService, private meta: MetaService) { }

  /** Sets the page metadata information and redirects to the Discord server if inBrowser. */
  ngOnInit(): void {
    this.meta.setTags(`${BASE_URL}/cfpform`, 'D.O. Conference 2 CFP link!',
      `${BASE_URL}/assets/images/cover.jfif`, 750, 750,
      ['discord', 'community', 'cfp', 'conference']);

    if (this.browserRec.isBrowser) {
      window.location.replace('https://docs.google.com/forms/d/e/1FAIpQLSdDQI45z2W3P-CL7M0PQSY0ikginRuW00B5Vn6MQcZDUiYtsA/viewform?usp=sf_link');
    }
  }
}
