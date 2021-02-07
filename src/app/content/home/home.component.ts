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
  constructor() { }

  ngOnInit(): void {
  }

}
