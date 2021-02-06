import { keyDescOrder, stringify, groupBy, getMonth, getDay } from '../../../utils/listing-utils';
import { PostMap } from './../../../interfaces/post-map';
import { Post } from './../../../interfaces/post';
import { Component, OnInit } from '@angular/core';
import { generatePostRoutes } from 'src/app/routing/app.sub-routes';

@Component({
  selector: 'app-posts-inventory',
  templateUrl: './posts-inventory.component.html',
  styleUrls: ['./posts-inventory.component.scss']
})
export class PostsInventoryComponent implements OnInit {
  posts: Post[];
  postsByYear: PostMap;
  keyDescOrder = keyDescOrder;
  stringify = stringify;
  getMonth = getMonth
  getDay = getDay

  numberPostsToLoad: number = 9;
  maximumPostsLoaded: boolean;
  compactView: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.loadPosts();
  }

  loadPosts(): void {
    let _posts: Post[];
    _posts = generatePostRoutes();
    this.maximumPostsLoaded = this.numberPostsToLoad > _posts.length;
    this.posts = !this.compactView ? _posts.slice(0, this.numberPostsToLoad) : _posts;
    this.postsByYear = groupBy(this.posts, 'year');
  }

  loadMorePosts(): void {
    this.numberPostsToLoad += 3;
    this.loadPosts();
  }

  toggleCompactView(): void {
    this.compactView = !this.compactView;
    this.loadPosts();
  }
}
