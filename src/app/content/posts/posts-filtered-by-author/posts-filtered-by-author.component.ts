import { keyDescOrder, groupBy } from '../../../utils/listing-utils';
import { PostMap } from '../../../interfaces/post-map';
import { Post } from '../../../interfaces/post';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filterPostRoutesByAuthor, generatePostRoutes } from 'src/app/routing/app.sub-routes';

@Component({
  selector: 'app-posts-filtered-by-author',
  templateUrl: './posts-filtered-by-author.component.html',
  styleUrls: ['./posts-filtered-by-author.component.scss']
})
export class PostsFilteredByAuthorComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  posts: Post[];
  postsByYear: PostMap = {};
  keyDescOrder = keyDescOrder;
  author: string = '';

  numberPostsToLoad: number = 9;
  maximumPostsLoaded: boolean;
  compactView: boolean = false;

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params.author !== undefined)
        this.author = params.author;
      this.loadPosts();
    });
  }

  loadPosts(): void {
    let _posts: Post[];
    _posts = (this.author !== '') ? filterPostRoutesByAuthor(this.author) : generatePostRoutes();
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
