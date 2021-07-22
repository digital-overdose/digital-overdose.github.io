import { Component, OnInit } from '@angular/core';
import { authorList } from 'src/app/data/authors';
import { SocialsLink } from 'src/app/interfaces/author/socials-link';

/**
 * The fouter element of the page.
 *
 * @export
 */
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  /** The links to be displayed at the bottom of the page. */
  links: SocialsLink[] = authorList['Digital Overdose'].links;

  /** Creates an instance of FooterComponent. */
  constructor() { }

  /** Initialises the component. */
  ngOnInit(): void { }

}
