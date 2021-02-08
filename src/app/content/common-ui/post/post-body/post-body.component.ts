import { getDay, getMonth } from '../../../../utils/listing-utils';
import { Tag } from '../../../../interfaces/tag';
import { Component, OnInit, Input } from '@angular/core';

/**
 * The body of a Post, displays the post.
 *
 * @export
 */
@Component({
  selector: 'app-post-body',
  templateUrl: './post-body.component.html',
  styleUrls: ['./post-body.component.scss']
})
export class PostBodyComponent implements OnInit {
  /** The title of the post. */
  @Input() title: string;

  /** The background image of the Post header. */
  @Input() imageUrl: string;

  /** The tags of the post. */
  @Input() tags: Tag[];

  /** The creation date of the post. */
  @Input() created: number[];

  /** The last edition date of the post. */
  @Input() edited: number[];

  /** Local copy. */
  getDay = getDay;

  /** Local copy. */
  getMonth = getMonth;

  /** Creates an instance of PostsCardNormalComponent. */
  constructor() { }

  /** Initialises the component. */
  ngOnInit(): void { }
}
