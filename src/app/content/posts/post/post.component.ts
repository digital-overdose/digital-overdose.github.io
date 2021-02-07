import { authorList } from '../../../data/authors';
import { Tag } from '../../../interfaces/tag';
import { Author } from '../../../interfaces/author';
import { ActivatedRoute } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  title: string;
  image_url: string;

  authors: Author[];
  tags: Tag[];

  @Input() created: number[];
  @Input() edited: number[];


  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.title = data.title ?? '';
      this.image_url = data.image_url ?? '';
      this.authors = (data.authors === undefined || data.authors === null || data.authors.length === 0) ? [ authorList["Digital Overdose"] ] : data.authors;
      this.tags = data.tags ?? [];
    });
  }


}
