import { Author } from '../../../../interfaces/author';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-sidebar',
  templateUrl: './post-sidebar.component.html',
  styleUrls: ['./post-sidebar.component.scss']
})
export class PostSidebarComponent implements OnInit {
  @Input() authors: Author[];

  constructor() { }

  ngOnInit(): void {
  }

}
