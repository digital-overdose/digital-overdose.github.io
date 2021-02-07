import { stringify, getMonth, getDay } from './../../../../../utils/listing-utils';
import { Post } from './../../../../../interfaces/post';

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts-card',
  templateUrl: './posts-card-normal.component.html',
  styleUrls: ['./posts-card-normal.component.scss']
})
export class PostsCardNormalComponent implements OnInit {
  @Input() post: Post;

  stringify = stringify;
  getMonth = getMonth;
  getDay = getDay;
  constructor() { }

  ngOnInit(): void {
  }
}
