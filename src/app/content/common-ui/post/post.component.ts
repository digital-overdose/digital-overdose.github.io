import { authorList } from 'src/app/data/authors';
import { Tag } from 'src/app/interfaces/tag';
import { Author } from 'src/app/interfaces/author';
import { ActivatedRoute } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';

/**
 * A Post.
 *
 * @export
 */
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  /** The title of the Post */
  title: string;

  /** The url of the Post's header image. */
  imageUrl: string;

  /** The authors of the Post. */
  authors: Author[];

  /** The tags of the Post. */
  tags: Tag[];

  /** The date at which the post was created. */
  @Input() created: number[];

  /** The date at which the post was last edited. */
  @Input() edited: number[];

  /**
   * Creates an instance of PostComponent.
   * @param route The router observer.
   */
  constructor(private route: ActivatedRoute) { }

  /** Gets the page route information. */
  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.title = data.title ?? '';
      this.imageUrl = data.imageUrl ?? '';
      this.authors = (data.authors === undefined || data.authors === null || data.authors.length === 0) ?
        [ authorList['Digital Overdose'] ] : data.authors;
      this.tags = data.tags ?? [];
    });
  }


}
