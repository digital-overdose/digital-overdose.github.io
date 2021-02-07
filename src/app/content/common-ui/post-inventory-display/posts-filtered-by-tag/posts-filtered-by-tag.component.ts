import { PostInventoryDisplayComponent } from '../post-inventory-display.component';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/interfaces/post';
import { filterPostRoutesByTag, generatePostRoutes } from 'src/app/utils/routing-functions';

@Component({
  selector: 'app-posts-filtered-by-tag',
  templateUrl: './../post-inventory-display.component.html',
  styleUrls: ['./../post-inventory-display.component.scss']
})
export class PostsFilteredByTagComponent extends PostInventoryDisplayComponent implements OnInit  {
  filter: string = '';

  constructor(private route: ActivatedRoute) {
    super()
  }

  ngOnInit(): void {
    this.title = `Posts tagged:`;
    this.route.params.subscribe(params => {
      if (params.filter !== undefined) {
        this.filter = params.filter;
        this.subtitle = `'${this.filter}'`;
      }
      this.loadPosts();
    });
    super.ngOnInit();
  }

  loadPosts(): void {
    let _posts: Post[];
    _posts = (this.filter !== '') ? filterPostRoutesByTag(this.filter) : generatePostRoutes();
    super.loadPosts(_posts);
  }

}
