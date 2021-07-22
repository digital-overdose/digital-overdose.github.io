import { Component, OnInit } from '@angular/core';
import { BASE_URL } from 'src/app/data/url';
import { MetaService } from 'src/app/services/meta.service';

@Component({
  templateUrl: './cfp.component.html',
  styleUrls: ['../../conference.components.scss']
})
export class Dovercon2021CfpComponent implements OnInit {
  /**
   * Creates an instance of ConferenceComponent.
   *
   * @param meta The HTML header metadata injection service.
   */
  constructor(private meta: MetaService) { }

  /** Set the page metadata information. */
  ngOnInit(): void {
    this.meta.setTags(`${BASE_URL}/dovercon/cfp-edition-2021`, 'DOVERCON2021: CFP',
                      `${BASE_URL}/assets/images/cover.jfif`, 750, 750,
                      ['conference', 'for', 'rookies', 'cfp', 'dovercon'],
                      'Digital Overdose Con! Propose a talk and join us!');
  }
}
