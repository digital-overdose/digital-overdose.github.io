import { Component, OnInit } from '@angular/core';
import { BASE_URL } from 'src/app/data/url';
import { MetaService } from 'src/app/services/meta.service';

/**
 * Displays information on the Digital Overdose community.
 *
 * @export
 */
@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.scss']
})
export class CommunityComponent implements OnInit {
  /**
   * Creates an instance of CommunityComponent.
   *
   * @param meta The HTML header metadata injection service.
   */
  constructor(private meta: MetaService) { }

  /** Set the page metadata information. */
  ngOnInit(): void {
    this.meta.setTags(`${BASE_URL}/community`, 'Community',
                      `${BASE_URL}/assets/images/cover.jfif`, 750, 750,
                      ['discord', 'community']);
  }

}
