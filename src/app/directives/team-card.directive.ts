import { Directive, ElementRef } from '@angular/core';

/**
 * A directive that adds specific classes when a component is interacted with in a specific manner.
 * @export
 */
@Directive({
  selector: '[appTeamCard]',
  host: {
    '(mouseenter)': 'onMouseEnter()',
    '(mouseleave)': 'onMouseLeave()'
  }
})
export class TeamCardDirective {
  /** The HTML element the directive is attached to. */
  private el: HTMLElement;

  /**
   * Creates an instance of TeamCardDirective with the associated HTML Element it is attached to.
   * @param el The HTML element that this directive is associated to.
   */
  constructor(el: ElementRef) { this.el = el.nativeElement; }

  /** Adds the .active class when the mouse enters the object. */
  onMouseEnter(): void {
    this.el.children[0].classList.add('active');
  }

  /** Removes the .active class when the mouse leaves the object. */
  onMouseLeave(): void {
    this.el.children[0].classList.remove('active');
  }

}
