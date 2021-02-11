import { Component, OnInit } from '@angular/core';
import { BASE_URL } from 'src/app/data/url';
import { MetaService } from 'src/app/services/meta.service';

/**
 * Displays the website's Copyright Policy.
 *
 * @export
 */
@Component({
  selector: 'app-copyright',
  templateUrl: './copyright.component.html',
  styleUrls: ['./copyright.component.scss']
})
export class CopyrightComponent implements OnInit {
  /**
   * Creates an instance of CopyrightComponent.
   *
   * @param meta The HTML header metadata injection service.
   */
  constructor(private meta: MetaService) {
    this.meta.setTags(`${BASE_URL}/copyright`, 'Copyright Policy',
                      `${BASE_URL}/assets/images/cover.jfif`, 750, 750,
                      ['copyright', 'cc-by-sa']);
  }

  /** Set the page metadata information. */
  ngOnInit(): void { }
}
