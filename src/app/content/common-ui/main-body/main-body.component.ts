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

  /**
   * Creates an instance of MainBodyComponent.
   *
   * @param router The Router to observe the url path from.
   */
  constructor(private router: Router) { }

  /** Initialises the component. */
  ngOnInit(): void {
    this.router.events.subscribe(
      (event) => {
        if (event instanceof RouterEvent) {
          this.container = !['/home'].includes(event.url);
        }
      }
    );
  }
}
