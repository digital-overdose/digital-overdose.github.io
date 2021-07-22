import { Component, Input, OnInit } from '@angular/core';

/**
 * Displays a social media button in a container.
 *
 * @export
 */
@Component({
  selector: 'app-social-button',
  templateUrl: './social-button.component.html',
  styleUrls: ['./social-button.component.scss'],
})
export class SocialButtonComponent implements OnInit {
  /** The text to be displayed on the button. */
  @Input() text: string;

  /** The url the button should redirect to. */
  @Input() url: string;

  /** The font awesome classes used for the icons. */
  @Input() faClass: string;

  /** The color of the button. */
  @Input() color: string;

  /** Whether or not the button should display a border. */
  @Input() border: boolean = false;

  /** Creates an instance of SocialButtonComponent. */
  constructor() { }

  /** Initializes the component state. */
  ngOnInit(): void { }
}
