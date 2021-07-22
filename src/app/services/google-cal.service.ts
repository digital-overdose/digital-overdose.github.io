import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { GcalApiResponse } from 'src/app/interfaces/calendar/gcal-api-response';
import { GcalEvent } from 'src/app/interfaces/calendar/gcal-event';

/**
 * This service is designed to integrate the Google Calendar API so that the site can display upcoming events.
 *
 * @export
 */
@Injectable({
  providedIn: 'root'
})
export class GoogleCalService {
  /**
   * Creates an instance of GoogleCalService.
   * @param http The service included in the module that allows for REST API requests and similar.
   */
  constructor(private http: HttpClient) {  }

  /** Queries the Google Calendar API to get the next events. */
  async getCalendarEvents(): Promise<GcalEvent[]> {
    let events: GcalEvent[] = [];
    events = await this.http.get(
      'https://www.googleapis.com/calendar/v3/calendars/7v3cc0k33248jdcmrmvp75e6jo%40group.calendar.google.com/events?key=AIzaSyA4kVl5yEgSztWS27qG9oIgdw646KnoeNc').toPromise().then(
      (response: GcalApiResponse) => response.items
    );

    return events;
  }
}
