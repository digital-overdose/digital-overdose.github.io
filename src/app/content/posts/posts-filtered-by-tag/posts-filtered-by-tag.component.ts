import { keyDescOrder, groupBy } from '../../../utils/listing-utils';
import { PostMap } from '../../../interfaces/post-map';
import { Post } from '../../../interfaces/post';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filterPostRoutesByTag, generatePostRoutes } from 'src/app/routing/app.sub-routes';

@Component({
  selector: 'app-posts-filtered-by-tag',
  templateUrl: './posts-filtered-by-tag.component.html',
  styleUrls: ['./posts-filtered-by-tag.component.scss']
})
export class PostsFilteredByTagComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  posts: Post[];
  postsByYear: PostMap = {};
  keyDescOrder = keyDescOrder;
  filter: string = '';

  numberPostsToLoad: number = 9;
  maximumPostsLoaded: boolean;
  compactView: boolean = false;

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params.filter !== undefined)
        this.filter = params.filter;
      this.loadPosts();
    });
  }

  loadPosts(): void {
    let _posts: Post[];
    _posts = (this.filter !== '') ? filterPostRoutesByTag(this.filter) : generatePostRoutes();
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
