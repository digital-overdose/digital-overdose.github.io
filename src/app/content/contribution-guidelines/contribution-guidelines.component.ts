import { Component, OnInit } from '@angular/core';
import { MetaService } from 'src/app/services/meta.service';
import { BASE_URL } from 'src/app/data/url';

/**
 * Explains the rules and requirements to contribute to the website's posts.
 *
 * @export
 */
@Component({
  selector: 'app-contribution-guidelines',
  templateUrl: './contribution-guidelines.component.html',
  styleUrls: ['./contribution-guidelines.component.scss']
})
export class ContributionGuidelinesComponent implements OnInit {
  /**
   * Creates an instance of ContributionGuidelinesComponent.
   *
   * @param meta The HTML header metadata injection service.
   */
  constructor(private meta: MetaService) {
    this.meta.setTags(`${BASE_URL}/contribution-guidelines`, 'Digital Overdose Con: For Rookies',
                      `${BASE_URL}/assets/images/cover.jfif`, 750, 750,
                      ['contribution', 'external', 'content'],
                      'Guidelines to contribute a post or article to Digital Overdose.');
  }

  /** Set the page metadata information. */
  ngOnInit(): void { }

}
