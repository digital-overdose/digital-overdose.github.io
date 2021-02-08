import { BrowserRecognitionService } from './../../../../../services/browser-recognition.service';
import { Component, OnInit, Input } from '@angular/core';
import { Post } from './.././../../../../interfaces/post';
import { stringify } from './.././../../../../utils/listing-utils';

/**
 * A Post Card.
 *
 * @export
 */
@Component({
  selector: 'app-posts-card-compact',
  templateUrl: './posts-card-compact.component.html',
  styleUrls: ['./posts-card-compact.component.scss']
})
export class PostsCardCompactComponent implements OnInit {
  /** The post to display. */
  @Input() post: Post;

  /** Local copy */
  stringify = stringify;

  /**
   * Creates an instance of PostsCardCompactHeaderComponent.
   *
   * @param browserRec The browser recognition service.
   */
  constructor(private browserRec: BrowserRecognitionService) { }

  /** Initialises the component. */
  ngOnInit(): void { }

  /**
   * URL moves to post.
   *
   * @param path The path of the Post.
   */
  goToPost(path: string) {
    if (this.browserRec.isBrowser) {
      window.location.replace(path);
    }

  }
}
