import { Component, Input, OnInit } from '@angular/core';
import { Author } from 'src/app/interfaces/author';

@Component({
  selector: 'app-author-card',
  templateUrl: './author-card.component.html',
  styleUrls: ['./author-card.component.scss']
})
export class AuthorCardComponent implements OnInit {
  @Input() author: Author;

  constructor() { }

  ngOnInit(): void {
  }
}
