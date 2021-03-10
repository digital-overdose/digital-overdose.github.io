import { Component, OnInit } from '@angular/core';
import { mentors } from 'src/app/data/dovercon/2021/mentors';
import { BASE_URL } from 'src/app/data/url';
import { TeamMember } from 'src/app/interfaces/team-member';
import { MetaService } from 'src/app/services/meta.service';

@Component({
  templateUrl: './mentors.component.html',
  styleUrls: ['../../conference.component.scss']
})
export class Dovercon2021MentorsComponent implements OnInit {
  /** The list of team members, retrieved from data storage. */
  mentors: TeamMember[] = mentors;

  /**
   * Creates an instance of ConferenceComponent.
   *
   * @param meta The HTML header metadata injection service.
   */
  constructor(private meta: MetaService) { }

  /** Set the page metadata information. */
  ngOnInit(): void {
    this.meta.setTags(`${BASE_URL}/dovercon/schedule-edition-2021`, 'DOVERCON2021: Mentors',
                      `${BASE_URL}/assets/images/cover.jfif`, 750, 750,
                      ['conference', 'for', 'rookies', 'mentors', 'dovercon'],
                      'Digital Overdose Con! The team that will look after our speakers before the con...');
  }
}
