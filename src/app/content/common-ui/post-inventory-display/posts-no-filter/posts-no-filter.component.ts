import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/interfaces/post';
import { generatePostRoutes } from 'src/app/utils/routing-functions';
import { PostInventoryDisplayComponent } from '../post-inventory-display.component';

@Component({
  selector: 'app-posts-no-filter',
  templateUrl: './../post-inventory-display.component.html',
  styleUrls: ['./../post-inventory-display.component.scss']
})
export class PostsNoFilterComponent extends PostInventoryDisplayComponent implements OnInit  {
  constructor(private route: ActivatedRoute) {
    super()
  }

  ngOnInit(): void {
    this.title = `All posts`;
    this.route.params.subscribe(params => {
      this.loadPosts();
    });
    super.ngOnInit();
  }

  loadPosts(): void {
    let _posts: Post[];
    _posts = generatePostRoutes();
    super.loadPosts(_posts);
  }
}
