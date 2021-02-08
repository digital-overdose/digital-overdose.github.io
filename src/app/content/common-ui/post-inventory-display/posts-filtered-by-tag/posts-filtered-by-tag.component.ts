import { PostInventoryDisplayComponent } from '../post-inventory-display.component';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/interfaces/post';
import { filterPostRoutesByTag, generatePostRoutes } from 'src/app/utils/route-generation-functions';

/**
 * Loads up posts possessing a certain tag and displays them. Comes in card and list-tile views.
 *
 * @export
 */
@Component({
  selector: 'app-posts-filtered-by-tag',
  templateUrl: './../post-inventory-display.component.html',
  styleUrls: ['./../post-inventory-display.component.scss']
})
export class PostsFilteredByTagComponent extends PostInventoryDisplayComponent implements OnInit  {
  /** The tag the posts should be filtered for. */
  tag: string = '';

  /**
   * Creates an instance of PostsFilteredByTagComponent.
   * @param route The router observer.
   */
  constructor(private route: ActivatedRoute) {
    super();
  }

  /** Set the page metadata information. */
  ngOnInit(): void {
    this.title = `Posts tagged:`;
    this.route.params.subscribe(params => {
      if (params.filter !== undefined) {
        this.tag = params.filter;
        this.subtitle = `'${this.tag}'`;
      }
      this.loadPosts();
    });
    super.ngOnInit();
  }

  /** Increases the maximum amount of posts to display. */
  loadPosts(): void {
    const postsToLoad: Post[] = (this.tag !== '') ? filterPostRoutesByTag(this.tag) : generatePostRoutes();
    super.loadPosts(postsToLoad);
  }
}
