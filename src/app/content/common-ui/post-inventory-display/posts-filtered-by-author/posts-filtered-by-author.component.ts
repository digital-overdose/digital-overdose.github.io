import { PostInventoryDisplayComponent } from '../post-inventory-display.component';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/interfaces/post';
import { filterPostRoutesByAuthor, generatePostRoutes } from 'src/app/utils/routing-functions';

@Component({
  selector: 'app-posts-filtered-by-author',
  templateUrl: './../post-inventory-display.component.html',
  styleUrls: ['./../post-inventory-display.component.scss']
})
export class PostsFilteredByAuthorComponent extends PostInventoryDisplayComponent implements OnInit  {
  author: string = '';

  constructor(private route: ActivatedRoute) {
    super()
  }

  ngOnInit(): void {
    this.title = `Posts written by:`;
    this.route.params.subscribe(params => {
      if (params.author !== undefined) {
        this.author = params.author;
        this.subtitle = `${this.author}`;
      }
      this.loadPosts();
    });
    super.ngOnInit();
  }

  loadPosts(): void {
    let _posts: Post[];
    _posts = (this.author !== '') ? filterPostRoutesByAuthor(this.author) : generatePostRoutes();
    super.loadPosts(_posts);
  }

}
