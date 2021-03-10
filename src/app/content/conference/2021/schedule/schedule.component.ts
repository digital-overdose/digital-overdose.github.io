import { Component, OnInit } from '@angular/core';
import { BASE_URL } from 'src/app/data/url';
import { MetaService } from 'src/app/services/meta.service';

@Component({
  templateUrl: './schedule.component.html',
  styleUrls: ['../../conference.component.scss']
})
export class Dovercon2021ScheduleComponent implements OnInit {
  /**
   * Creates an instance of ConferenceComponent.
   *
   * @param meta The HTML header metadata injection service.
   */
  constructor(private meta: MetaService) { }

  /** Set the page metadata information. */
  ngOnInit(): void {
    this.meta.setTags(`${BASE_URL}/dovercon/schedule-edition-2021`, 'DOVERCON2021: Schedule',
                      `${BASE_URL}/assets/images/cover.jfif`, 750, 750,
                      ['conference', 'for', 'rookies', 'schedule', 'dovercon'],
                      'Digital Overdose Con! Check out who and when will be on a YouTube stream near you, soon...');
  }
}
