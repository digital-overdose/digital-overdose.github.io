import { BASE_URL } from 'src/app/data/url';
import { MetaService } from 'src/app/services/meta.service';
import { Component, OnInit } from '@angular/core';

/**
 * Displays information on the Digital Overdose team.
 *
 * @export
 */
@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
  /**
   * Creates an instance of TeamComponent.
   *
   * @param meta The HTML header metadata injection service.
   */
  constructor(private meta: MetaService) { }

  /** Set the page metadata information. */
  ngOnInit(): void {
    this.meta.setTags(`${BASE_URL}/team`, 'The Digital Overdose Team',
                      `${BASE_URL}/assets/images/cover.jfif`, 750, 750,
                      ['discord', 'community', 'team']);
  }
}
