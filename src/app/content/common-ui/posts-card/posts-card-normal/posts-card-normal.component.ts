import { stringify, getMonth, getDay } from 'src/app/utils/listing-utils';
import { Post } from 'src/app/interfaces/post';

import { Component, Input, OnInit } from '@angular/core';

/**
 * A Post Card.
 *
 * @export
 */
@Component({
  selector: 'app-posts-card',
  templateUrl: './posts-card-normal.component.html',
  styleUrls: ['./posts-card-normal.component.scss']
})
export class PostsCardNormalComponent implements OnInit {
  /** The post to represent. */
  @Input() post: Post;

  /** Local copy */
  stringify = stringify;

  /** Local copy */
  getMonth = getMonth;

  /** Local copy */
  getDay = getDay;

  /** Creates an instance of PostsCardNormalComponent. */
  constructor() { }

  /** Initialises the component. */
  ngOnInit(): void { }
}
