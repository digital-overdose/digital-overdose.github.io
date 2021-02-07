import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/interfaces/post';
import { PostMap } from 'src/app/interfaces/post-map';
import { groupBy, keyDescOrder } from 'src/app/utils/listing-utils';

@Component({
  templateUrl: './post-inventory-display.component.html',
  styleUrls: ['./post-inventory-display.component.scss']
})
export class PostInventoryDisplayComponent implements OnInit {
  posts: Post[];
  postsByYear: PostMap = {};
  keyDescOrder = keyDescOrder;

  numberPostsToLoad: number = 9;
  maximumPostsLoaded: boolean;
  compactView: boolean = false;
  title: string;
  subtitle: string;

  constructor() { }

  ngOnInit(): void {
  }

  loadPosts(_posts?: Post[]): void {
    this.maximumPostsLoaded = this.numberPostsToLoad > _posts.length;
    this.posts = _posts.slice(0, this.numberPostsToLoad);
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
