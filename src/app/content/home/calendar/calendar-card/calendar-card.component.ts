import { BrowserRecognitionService } from 'src/app/services/browser-recognition.service';
import { CalendarEvent } from 'src/app/interfaces/calendar/calendar-event';
import { Component, Input, OnInit } from '@angular/core';
import { createCalendarLink } from 'src/app/utils/calendar-link';

/**
 * Displays a Google Calendar event.
 *
 * @export
 */
@Component({
  selector: 'app-calendar-card',
  templateUrl: './calendar-card.component.html',
  styleUrls: ['./calendar-card.component.scss']
})
export class CalendarCardComponent implements OnInit {
  /** The actual event at the source of the card. */
  @Input() event: CalendarEvent;

  /** Creates an instance of CalendarCardComponent. */
  constructor(private browserRec: BrowserRecognitionService) { }

  /** Initializes the component state. */
  ngOnInit(): void { }

  /** Opens the calendar link in a new tab. */
  goToCalendar() {
    if (this.browserRec.isBrowser) {
      window.open(createCalendarLink(this.event), '_blank');
    }
  }
}
