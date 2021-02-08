import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';

/** Checks whether or not the page is running in an actual browser or being prerendered / scraped. */
@Injectable({
  providedIn: 'root'
})
export class BrowserRecognitionService {
  /**
   * Value of whether or not this page is running in an actual browser or being prerendered / scraped.
   *
   * @private
   */
  private isInBrowser: boolean;

  /**
   * Creates an instance of BrowserRecognitionService.
   *
   * @param platformId The Platform ID.
   */
  constructor(@Inject(PLATFORM_ID) private platformId: object) {
    this.isInBrowser = isPlatformBrowser(platformId);
  }

  /**
   * Returns whether or not this page is in a browser.
   *
   * @readonly
   */
  get isBrowser() { return this.isInBrowser ?? false; }
}
