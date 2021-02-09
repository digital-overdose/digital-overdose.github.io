import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';

/**
 * Everything.
 *
 * @export
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  /** Whether or not the content of the page should be x-constrained. */
  container: boolean = true;

  /**
   * Creates an instance of AppComponent.
   *
   * @param router The Router to observe the url path from.
   */
  constructor(private router: Router) { }

  /** Initialises the component. */
  ngOnInit(): void {
    this.container = !['/', '/home'].includes(this.router.url);
    this.router.events.subscribe(
      (event) => {
        if (event instanceof RouterEvent) {
          this.container = !['/', '/home'].includes(event.url);
        }
      }
    );
  }
}
