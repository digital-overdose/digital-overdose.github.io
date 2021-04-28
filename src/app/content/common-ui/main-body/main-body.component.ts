import { Router, RouterEvent } from '@angular/router';
import { Component, OnInit, } from '@angular/core';

/**
 * The core element of the page.
 *
 * @export
 */
@Component({
  selector: 'app-main-body',
  templateUrl: './main-body.component.html',
  styleUrls: ['./main-body.component.scss']
})
export class MainBodyComponent implements OnInit {
  /** Whether or not the content of the page should be x-constrained. */
  container: boolean = true;

  /** List of paths that should not be x-constrained. */
  unconstrainedPath: string[] = ['/', '/home', '/community'];

  /**
   * Creates an instance of MainBodyComponent.
   *
   * @param router The Router to observe the url path from.
   */
  constructor(private router: Router) { }

  /** Initialises the component. */
  ngOnInit(): void {
    this.container = !this.unconstrainedPath.includes(this.router.url);
    this.router.events.subscribe(
      (event) => {
        if (event instanceof RouterEvent) {
          console.log(event.url);
          this.container = !this.unconstrainedPath.includes(event.url);
        }
      }
    );
  }
}
