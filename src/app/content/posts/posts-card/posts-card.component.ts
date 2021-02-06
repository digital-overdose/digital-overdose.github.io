import { stringify, getMonth, getDay } from '../../../utils/listing-utils';
import { Post } from './../../../interfaces/post';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts-card',
  templateUrl: './posts-card.component.html',
  styleUrls: ['./posts-card.component.scss']
})
export class PostsCardComponent implements OnInit {
  @Input() post: Post;

  stringify = stringify;
  getMonth = getMonth;
  getDay = getDay;
  constructor() { }

  ngOnInit(): void {
  }
}
