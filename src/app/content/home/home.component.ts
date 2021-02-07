import { BASE_URL } from './../../data/url';
import { MetaService } from './../../services/meta.service';
import { SocialsLink } from './../../interfaces/author/socials-link';
import { Component, OnInit } from '@angular/core';
import { authorList } from 'src/app/data/authors';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  socials: SocialsLink[] = authorList["Digital Overdose"].links;

  constructor(private meta: MetaService) { }

  ngOnInit(): void {
    this.meta.setTags(`${BASE_URL}/home`, 'Home',
                      `${BASE_URL}/assets/images/cover.jfif`, 750, 750,
                      ['community', 'discord', 'home']);
  }
}
