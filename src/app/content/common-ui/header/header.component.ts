import { Router, Event, RouterEvent } from '@angular/router';
import { Component, OnInit } from '@angular/core';

/**
 * The header element of the page.
 *
 * @export
 */
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  /** What page is currently loaded, used to highlight the navbar. */
  currentPath: string = '/home';

  /**
   * Creates an instance of HeaderComponent.
   *
   * @param router The Router to observe the url path from.
   */
  constructor(private router: Router) { }

  /** Initialises the component. */
  ngOnInit(): void {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof RouterEvent) {
        this.currentPath = event.url;
      }
    });
  }

}
