import { Component, Input, OnInit } from '@angular/core';
import { Author } from 'src/app/interfaces/author';

/**
 * The author card for the author of the Post.
 *
 * @export
 */
@Component({
  selector: 'app-author-card',
  templateUrl: './author-card.component.html',
  styleUrls: ['./author-card.component.scss']
})
export class AuthorCardComponent implements OnInit {
  /** The author to be displayed. */
  @Input() author: Author;

  /** Creates an instance of PostsCardNormalComponent. */
  constructor() { }

  /** Initialises the component. */
  ngOnInit(): void { }
}
