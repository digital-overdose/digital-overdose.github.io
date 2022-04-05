import { MetaService } from 'src/app/services/meta.service';
import { BASE_URL } from 'src/app/data/url';
import { BrowserRecognitionService } from 'src/app/services/browser-recognition.service';
import { Component, OnInit } from '@angular/core';

/**
 * Redirects the page to Digital Overdose's Twitch channel.
 *
 * @export
 */
@Component({
  selector: 'app-twitch',
  templateUrl: './twitch.component.html'
})
export class TwitchComponent implements OnInit {
  /**
   * Creates an instance of TwitchComponent.
   *
   * @param browserRec The inBrowser detection service.
   * @param meta The HTML header metadata injection service.
   */
  constructor(private browserRec: BrowserRecognitionService, private meta: MetaService) { }

  /** Sets the page metadata information and redirects to the YouTube channel if inBrowser. */
  ngOnInit(): void {
    this.meta.setTags(`${BASE_URL}/watch`, 'Watch the Digital Overdose Conference!',
      `${BASE_URL}/assets/images/cover.jfif`, 750, 750,
      ['twitch', 'live', 'conference', 'community']);
    if (this.browserRec.isBrowser) {
      window.location.replace('https://www.twitch.tv/digit4loverdose');
    }
  }
}
