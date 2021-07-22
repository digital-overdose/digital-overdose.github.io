
import { Component, OnInit } from '@angular/core';
import { BASE_URL } from 'src/app/data/url';
import { Mentor } from 'src/app/interfaces/mentor';
import { sponsors } from 'src/app/data/dovercon/2021/sponsors';
import { MetaService } from 'src/app/services/meta.service';

@Component({
  templateUrl: './sponsoring.component.html',
  styleUrls: ['../../conference.components.scss', '../../../../../assets/css/team-card.scss']
})
export class Dovercon2021SponsoringComponent implements OnInit {
  sponsors: Mentor[] = sponsors;
  /**
   * Creates an instance of ConferenceComponent.
   *
   * @param meta The HTML header metadata injection service.
   */
  constructor(private meta: MetaService) { }

  /** Set the page metadata information. */
  ngOnInit(): void {
    this.meta.setTags(`${BASE_URL}/dovercon/sponsoring-edition-2021`, 'DOVERCON2021: Sponsorship call',
                      `${BASE_URL}/assets/images/cover.jfif`, 750, 750,
                      ['conference', 'for', 'rookies', 'sponsoring', 'dovercon'],
                      'Digital Overdose Con! Sponsorships for us, conference swag for our speakers, visibility and reach for you.');
  }
}
