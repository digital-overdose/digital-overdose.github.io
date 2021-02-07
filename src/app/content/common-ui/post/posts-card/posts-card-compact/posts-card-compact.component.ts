import { BrowserRecognitionService } from './../../../../../services/browser-recognition.service';
import { Component, OnInit, Input } from '@angular/core';
import { Post } from './.././../../../../interfaces/post';
import { stringify } from './.././../../../../utils/listing-utils';

@Component({
  selector: 'app-posts-card-compact',
  templateUrl: './posts-card-compact.component.html',
  styleUrls: ['./posts-card-compact.component.scss']
})
export class PostsCardCompactComponent implements OnInit {
  @Input() post: Post;

  stringify = stringify;

  constructor(private browserRec: BrowserRecognitionService) { }

  ngOnInit(): void {
  }

  goToPost(path: string) {
    if (this.browserRec.isBrowser) {
      window.location.replace(path);
    }

  }
}
