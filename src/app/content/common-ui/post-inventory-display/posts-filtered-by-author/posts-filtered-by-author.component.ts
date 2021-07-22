import { PostInventoryDisplayComponent } from '../post-inventory-display.component';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/interfaces/post';
import { filterPostRoutesByAuthor, generatePostRoutes } from 'src/app/utils/route-generation-functions';

/**
 * Loads up posts written by a certain author and displays them. Comes in card and list-tile views.
 *
 * @export
 */
@Component({
  selector: 'app-posts-filtered-by-author',
  templateUrl: './../post-inventory-display.component.html',
  styleUrls: ['./../post-inventory-display.component.scss']
})
export class PostsFilteredByAuthorComponent extends PostInventoryDisplayComponent implements OnInit  {
  /** The author the posts should be filtered for. */
  author: string = '';

  /**
   * Creates an instance of PostsFilteredByAuthorComponent.
   * @param route The router observer.
   */
  constructor(private route: ActivatedRoute) {
    super();
    this.titleService.setTitle(`Community Posts by ${this.author}`);
  }

  /** Set the page metadata information. */
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

  /** Increases the maximum amount of posts to display. */
  loadPosts(): void {
    const postsToLoad: Post[] = (this.author !== '') ? filterPostRoutesByAuthor(this.author) : generatePostRoutes();
    super.loadPosts(postsToLoad);
  }

}
