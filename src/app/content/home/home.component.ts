import { BASE_URL } from './../../data/url';
import { MetaService } from './../../services/meta.service';
import { SocialsLink } from './../../interfaces/author/socials-link';
import { Component, OnInit } from '@angular/core';
import { authorList } from 'src/app/data/authors';

/**
 * Displays the Home Page.
 *
 * @export
 */
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  /** The Community's social media links. */
  socials: SocialsLink[] = authorList['Digital Overdose'].links;

  /**
   * Creates an instance of HomeComponent.
   *
   * @param meta The HTML header metadata injection service.
   */
  constructor(private meta: MetaService) { }

  /** Set the page metadata information. */
  ngOnInit(): void {
    this.meta.setTags(`${BASE_URL}/home`, 'Home',
                      `${BASE_URL}/assets/images/cover.jfif`, 750, 750,
                      ['community', 'discord', 'home'],
                      'Welcome to Digital Overdose !');
  }
}
