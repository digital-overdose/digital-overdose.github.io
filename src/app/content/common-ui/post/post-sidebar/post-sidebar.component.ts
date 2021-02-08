import { Author } from '../../../../interfaces/author';
import { Component, Input, OnInit } from '@angular/core';

/**
 * The sidebar of a Post, displays authors.
 *
 * @export
 */
@Component({
  selector: 'app-post-sidebar',
  templateUrl: './post-sidebar.component.html',
  styleUrls: ['./post-sidebar.component.scss']
})
export class PostSidebarComponent implements OnInit {
  /** The list of authors that contributed to the post. */
  @Input() authors: Author[];

  /** Creates an instance of PostsCardNormalComponent. */
  constructor() { }

  /** Initialises the component. */
  ngOnInit(): void { }
}
