import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/interfaces/post';
import { generatePostRoutes } from 'src/app/utils/route-generation-functions';
import { PostInventoryDisplayComponent } from '../post-inventory-display.component';

/**
 * Loads up posts and displays them. Comes in card and list-tile views.
 *
 * @export
 */
@Component({
  selector: 'app-posts-no-filter',
  templateUrl: './../post-inventory-display.component.html',
  styleUrls: ['./../post-inventory-display.component.scss']
})
export class PostsNoFilterComponent extends PostInventoryDisplayComponent implements OnInit  {
  /**
   * Creates an instance of PostsNoFilterComponent.
   * @param route The router observer.
   */
  constructor(private route: ActivatedRoute) {
    super();
  }

  /** Set the page metadata information. */
  ngOnInit(): void {
    this.title = `All posts`;
    this.route.params.subscribe(_ => {
      this.loadPosts();
    });
    super.ngOnInit();
  }

  /** Increases the maximum amount of posts to display. */
  loadPosts(): void {
    const postsToLoad: Post[] = generatePostRoutes();
    super.loadPosts(postsToLoad);
  }
}
