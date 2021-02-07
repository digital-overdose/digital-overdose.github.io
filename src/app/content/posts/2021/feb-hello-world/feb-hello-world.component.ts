import { MetaService } from './../../../../services/meta.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feb-hello-world',
  templateUrl: './feb-hello-world.component.html',
  styleUrls: ['./feb-hello-world.component.scss']
})
export class FebHelloWorldComponent implements OnInit {

  constructor(private meta: MetaService) { }

  ngOnInit(): void {

    this.meta.setTags('https://<domain>/post/2021/2021_02_06+Hello-World', 'Hello World!',
                      'https://<domain>/assets/images/cover.jfif', 750, 750,
                      ['discord', 'digital', 'overdose', 'new', 'beginnings']);

  }

}
