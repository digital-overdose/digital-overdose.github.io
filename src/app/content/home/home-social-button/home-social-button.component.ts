import { Component, Input, OnInit } from '@angular/core';

/**
 * Displays a social media button on the home page.
 *
 * @export
 */
@Component({
  selector: 'app-home-social-button',
  templateUrl: './home-social-button.component.html',
  styleUrls: ['./home-social-button.component.scss'],
})
export class HomeSocialButtonComponent implements OnInit {
  @Input() text: string;
  @Input() url: string;
  @Input() faClass: string;
  @Input() color: string;

  /** Creates an instance of HomeSocialButtonComponent. */
  constructor() { }

  /** Initializes the component state. */
  ngOnInit(): void { }
}
