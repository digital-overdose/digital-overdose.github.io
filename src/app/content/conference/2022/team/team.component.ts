import { BASE_URL } from 'src/app/data/url';
import { MetaService } from 'src/app/services/meta.service';
import { Component, OnInit } from '@angular/core';
import { organizers, volunteers } from 'src/app/data/conference/2022/team';
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
export class Conference2022TeamComponent implements OnInit {
  /** The list of team members, retrieved from data storage. */
  organizers: TeamMember[] = organizers;
  volunteers: TeamMember[] = volunteers;

  /**
   * Creates an instance of ConferenceComponent.
   *
   * @param meta The HTML header metadata injection service.
   */
  constructor(private meta: MetaService) { }

  /** Set the page metadata information. */
  ngOnInit(): void {
    this.meta.setTags(`${BASE_URL}/conference/2022/team`, 'D.O. CON 2: The team',
                      `${BASE_URL}/assets/images/cover.jfif`, 750, 750,
                      ['conference', 'for', 'rookies', 'team', 'dovercon'],
                      'Digital Overdose Con! Brought to you by...');
  }
}
