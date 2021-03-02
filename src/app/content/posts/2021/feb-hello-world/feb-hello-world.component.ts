import { BASE_URL } from 'src/app/data/url';
import { MetaService } from 'src/app/services/meta.service';
import { Component, OnInit } from '@angular/core';

/**
 * A post.
 *
 * @export
 * @implements {OnInit}
 */
@Component({
  selector: 'app-feb-hello-world',
  templateUrl: './feb-hello-world.component.html',
  styleUrls: ['./feb-hello-world.component.scss']
})
export class Feb2021HelloWorldComponent implements OnInit {
  /**
   * Creates an instance of this Post.
   *
   * @param meta The HTML header metadata injection service.
   */
  constructor(private meta: MetaService) { }

  /** Set the page metadata information. */
  ngOnInit(): void {
    this.meta.setTags(`${BASE_URL}/post/2021/2021_02_06+Hello-World`, 'Hello World!',
                      `${BASE_URL}/assets/images/cover.jfif`, 750, 750,
                      ['discord', 'new', 'beginnings']);}
}
