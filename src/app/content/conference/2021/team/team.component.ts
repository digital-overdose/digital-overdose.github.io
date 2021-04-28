import { BASE_URL } from 'src/app/data/url';
import { MetaService } from 'src/app/services/meta.service';
import { Component, OnInit } from '@angular/core';
import { organizers, helpers } from 'src/app/data/dovercon/2021/team';
import { TeamMember } from 'src/app/interfaces/team-member';

/**
 * Displays information on the Digital Overdose conference.
 *
 * @export
 */
@Component({
  templateUrl: './team.component.html',
  styleUrls: ['../../conference.components.scss', '../../../../../assets/css/team-card.scss' ]
})
export class Dovercon2021TeamComponent implements OnInit {
  /** The list of team members, retrieved from data storage. */
  organizers: TeamMember[] = organizers;
  helpers: TeamMember[] = helpers;

  /**
   * Creates an instance of ConferenceComponent.
   *
   * @param meta The HTML header metadata injection service.
   */
  constructor(private meta: MetaService) { }

  /** Set the page metadata information. */
  ngOnInit(): void {
    this.meta.setTags(`${BASE_URL}/dovercon/team-edition-2021`, 'DOVERCON2021: The team',
                      `${BASE_URL}/assets/images/cover.jfif`, 750, 750,
                      ['conference', 'for', 'rookies', 'team', 'dovercon'],
                      'Digital Overdose Con! Brought to you by...');
  }
}
