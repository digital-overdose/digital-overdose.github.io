import { Component, OnInit } from '@angular/core';
import { BASE_URL } from 'src/app/data/url';
import { MetaService } from 'src/app/services/meta.service';

/**
 * Displays Digital Overdose website's privacy policy.
 *
 * @export
 */
@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.scss']
})
export class PrivacyPolicyComponent implements OnInit {
  /**
   * Creates an instance of PrivacyPolicyComponent.
   *
   * @param meta The HTML header metadata injection service.
   */
  constructor(private meta: MetaService) { }

  /** Set the page metadata information. */
  ngOnInit(): void {
    this.meta.setTags(`${BASE_URL}/privacy`, 'Privacy Policy',
                      `${BASE_URL}/assets/images/cover.jfif`, 750, 750,
                      ['privacy', 'policy']);
  }
}
