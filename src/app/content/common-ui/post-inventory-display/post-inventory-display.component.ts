import { TitleService } from 'src/app/services/title.service';
import { MetaService } from 'src/app/services/meta.service';
import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/interfaces/post';
import { PostMap } from 'src/app/interfaces/post-map';
import { groupBy, keyDescOrder } from 'src/app/utils/listing-utils';
import { ServiceLocator } from 'src/app/utils/service.locator';
import { BrowserRecognitionService } from 'src/app/services/browser-recognition.service';
import { BASE_URL } from 'src/app/data/url';

/**
 * Loads up posts and displays them. Comes in card and list-tile views.
 *
 * @export
 */
@Component({
  templateUrl: './post-inventory-display.component.html',
  styleUrls: ['./post-inventory-display.component.scss']
})
export class PostInventoryDisplayComponent implements OnInit {
  /** The list of all of the posts that can be displayed. */
  posts: Post[];

  /** The list of all of the posts sorted by year. */
  postsByYear: PostMap = {};

  /** A number of maximum number of posts to be displayed. */
  numberPostsToLoad: number = 9;

  /** Whether or not all of the posts are loaded (helps to show the "load more" button). */
  maximumPostsLoaded: boolean;

  /** Whether or not the view is card or list-tile based. */
  compactView: boolean = false;

  /** The title of the display. */
  title: string;

  /** The subtitle of the display. */
  subtitle: string;

  /** Local copy for use in the HTML. */
  keyDescOrder = keyDescOrder;

  /** The service that enables us to detect whether the page is being served by a browser.  */
  protected browserRec: BrowserRecognitionService;

  /** The metadata injection service. */
  protected meta: MetaService;

  /** The title modification service. */
  protected titleService: TitleService;

  /** Creates an instance of PostInventoryDisplayComponent. */
  constructor() {
    this.browserRec = ServiceLocator.injector.get(BrowserRecognitionService);
    this.meta = ServiceLocator.injector.get(MetaService);
    this.titleService = ServiceLocator.injector.get(TitleService);
    this.meta.setTags(`${BASE_URL}/posts`, 'Community Posts',
                      `${BASE_URL}/assets/images/cover.jfif`, 750, 750,
                      ['community', 'content', 'posts']);
  }

  /** Set the page metadata information. */
  ngOnInit(): void { }

  /**
   * Loads a number of posts and assigns them to an object.
   *
   * @param [postsToLoad] The posts that should be loaded onto the page.
   */
    loadPosts(postsToLoad?: Post[]): void {
    this.maximumPostsLoaded = this.numberPostsToLoad >= postsToLoad.length;
    this.posts = this.compactView ? postsToLoad : postsToLoad.slice(0, this.numberPostsToLoad);
    this.postsByYear = groupBy(this.posts, 'year');
  }

  /** Increases the maximum amount of posts to display. */
  loadMorePosts(): void {
    this.numberPostsToLoad += 3;
    this.loadPosts();
  }

  /** Toggles the view from a card-based view to a list-tile-based view. */
  toggleCompactView(): void {
    this.compactView = !this.compactView;
    this.loadPosts();
  }

  /** Loads the Contribution Guidelines page. */
  goToContributionGuidelines(): void {
    if (this.browserRec.isBrowser) {
      window.location.assign('/contribution-guidelines');
    }
  }
}
