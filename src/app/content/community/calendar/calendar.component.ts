import { GcalEvent } from './../../../interfaces/calendar/gcal-event';
import { Component, OnInit } from '@angular/core';
import { GoogleCalService } from 'src/app/services/google-cal.service';

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
export class CalendarComponent implements OnInit {
  /** A list of events returned by the GCal API. */
  events: GcalEvent[] = [];

  /** Whether or not the component is still waiting on a response from the GCal API. */
  loading: boolean = true;

  /**
   * Creates an instance of CalendarComponent.
   *
   * @param gcal The Google Calendar API query service.
   */
  constructor(private gcal: GoogleCalService) { }

  /** Initializes the component state. */
  ngOnInit(): void {
    this.gcal.getCalendarEvents().then(
      (e: GcalEvent[]) => {
        this.events = e.slice(0, 3);
        this.loading = false;
      }
    );
  }
}
