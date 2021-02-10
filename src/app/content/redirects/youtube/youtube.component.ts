import { MetaService } from 'src/app/services/meta.service';
import { BASE_URL } from 'src/app/data/url';
import { BrowserRecognitionService } from 'src/app/services/browser-recognition.service';
import { Component, OnInit } from '@angular/core';

/**
 * Redirects the page to Digital Overdose's YouTube channel.
 *
 * @export
 */
@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html'
})
export class YoutubeComponent implements OnInit {
  /**
   * Creates an instance of YoutubeComponent.
   *
   * @param browserRec The inBrowser detection service.
   * @param meta The HTML header metadata injection service.
   */
  constructor(private browserRec: BrowserRecognitionService, private meta: MetaService) { }

  /** Sets the page metadata information and redirects to the YouTube channel if inBrowser. */
  ngOnInit(): void {
    this.meta.setTags(`${BASE_URL}/youtube`, 'Check our YouTube channel!',
                      `${BASE_URL}/assets/images/cover.jfif`, 750, 750,
                      ['youtube', 'community']);

    if (this.browserRec.isBrowser) {
      window.location.replace('https://www.youtube.com/channel/UCvTW4Eyt8xNbMEkFEEvFMIQ');
    }
  }


}
