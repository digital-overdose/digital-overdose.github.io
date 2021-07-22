import { Component, OnInit } from '@angular/core';
import { BASE_URL } from 'src/app/data/url';
import { MetaService } from 'src/app/services/meta.service';

@Component({
  selector: 'app-code-of-conduct',
  templateUrl: './code-of-conduct.component.html',
  styleUrls: ['../../conference.components.scss']
})
export class Dovercon2021CodeOfConductComponent implements OnInit {
  /**
   * Creates an instance of ConferenceComponent.
   *
   * @param meta The HTML header metadata injection service.
   */
  constructor(private meta: MetaService) { }

  /** Set the page metadata information. */
  ngOnInit(): void {
    this.meta.setTags(`${BASE_URL}/dovercon/code-of-conduct`, 'DOVERCON2021: Code of conduct',
                      `${BASE_URL}/assets/images/cover.jfif`, 750, 750,
                      ['conference', 'for', 'rookies', 'code', 'of', 'conduct'],
                      'Digital Overdose Con! Making sure everyone has a good time.');
  }
}
