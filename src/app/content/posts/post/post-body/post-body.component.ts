import { getDay, getMonth } from '../../../../utils/listing-utils';
import { Tag } from '../../../../interfaces/tag';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-body',
  templateUrl: './post-body.component.html',
  styleUrls: ['./post-body.component.scss']
})
export class PostBodyComponent implements OnInit {

  @Input() title: string;
  @Input() image_url: string;

  @Input() tags: Tag[];

  @Input() created: number[];
  @Input() edited: number[];

  getDay = getDay;
  getMonth = getMonth;

  constructor() { }

  ngOnInit(): void {
  }

}
