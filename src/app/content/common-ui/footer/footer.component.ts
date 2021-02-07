import { Component, OnInit } from '@angular/core';
import { authorList } from 'src/app/data/authors';
import { SocialsLink } from 'src/app/interfaces/author/socials-link';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  links: SocialsLink[];

  constructor() { }

  ngOnInit(): void {
    this.links = authorList["Digital Overdose"].links;
  }

}
