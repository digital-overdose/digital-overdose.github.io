import { BrowserRecognitionService } from './../../../../services/browser-recognition.service';
import { GcalEvent } from './../../../../interfaces/calendar/gcal-event';
import { Component, Input, OnInit } from '@angular/core';

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
  @Input() event: GcalEvent;

  /** Creates an instance of CalendarCardComponent. */
  constructor(private browserRec: BrowserRecognitionService) { }

  /** Initializes the component state. */
  ngOnInit(): void { }

  /** Opens the calendar link in a new tab. */
  goToCalendar() {
    if (this.browserRec.isBrowser) {
      window.open(this.event.htmlLink, '_blank');
    }
  }
}
