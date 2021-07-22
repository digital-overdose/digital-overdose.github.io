import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';

/**
 * Class that handles the dynamic display of webpage titles.
 *
 * @export
 */
@Injectable({
  providedIn: 'root'
})
export class TitleService {
  /**
   * Creates an instance of TitleService.
   *
   * @param title A service that can modify the title in the HTML header.
   */
  constructor(private title: Title) { }

  /**
   * Sets a new title to the page.
   *
   * @param newTitle The new title of the page.
   */
  setTitle(newTitle: string) {
    this.title.setTitle(newTitle + ' @Digital Overdose');
  }
}
