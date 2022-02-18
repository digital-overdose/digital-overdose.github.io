import { CalendarEvent } from 'src/app/interfaces/calendar/calendar-event';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { events } from 'src/app/data/events';

/**
 * Displays a calendar widget with events loaded from the Google Calendar.
 *
 * @export
 */
@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent {
  /** A list of events returned by the GCal API. */
  events: CalendarEvent[] = events.filter((v) => (Date.parse(v.end) > Date.now())).sort((a: CalendarEvent, b: CalendarEvent) => {
    return new Date(a.end) > new Date(b.end) ? 1 : -1;
  });

  /** Whether or not the component is still waiting on a response from the GCal API. */
  loading: boolean = true;

  @ViewChild("scrollable", { static: true, read: ElementRef })
  scrollbar: ElementRef;
  contentWrapper: HTMLElement;

  /**
   * Creates an instance of CalendarComponent.
   */
  constructor() { }
}
