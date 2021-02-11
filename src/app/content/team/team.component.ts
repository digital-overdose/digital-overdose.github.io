import { teamMemberList } from 'src/app/data/team';
import { BASE_URL } from 'src/app/data/url';
import { MetaService } from 'src/app/services/meta.service';
import { Component, OnInit } from '@angular/core';
import { TeamMember } from 'src/app/interfaces/team-member';

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
  /** The list of team members, retrieved from data storage. */
  team: TeamMember[] = teamMemberList;

  /**
   * Creates an instance of TeamComponent.
   *
   * @param meta The HTML header metadata injection service.
   */
  constructor(private meta: MetaService) {
    this.meta.setTags(`${BASE_URL}/team`, 'The Digital Overdose Team',
                      `${BASE_URL}/assets/images/cover.jfif`, 750, 750,
                      ['discord', 'community', 'team']);
  }

  /** Set the page metadata information. */
  ngOnInit(): void { }
}
