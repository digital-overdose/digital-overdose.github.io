import { BASE_URL } from './../../data/url';
import { MetaService } from './../../services/meta.service';
import { Component, OnInit } from '@angular/core';

/**
 * Displays information on the Digital Overdose conference.
 *
 * @export
 */
@Component({
  selector: 'app-conference',
  templateUrl: './conference.component.html',
  styleUrls: ['./conference.component.scss']
})
export class ConferenceComponent implements OnInit {
  /**
   * Creates an instance of ConferenceComponent.
   *
   * @param meta The HTML header metadata injection service.
   */
  constructor(private meta: MetaService) { }

  /** Set the page metadata information. */
  ngOnInit(): void {
    this.meta.setTags(`${BASE_URL}/conference`, 'Digital Overdose Con: For Rookies',
                      `${BASE_URL}/assets/images/cover.jfif`, 750, 750,
                      ['conference', 'for', 'rookies'],
                      'Digital Overdose is proud to announce that we are running an information security conference !');
  }
}
