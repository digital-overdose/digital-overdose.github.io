import { CalendarEvent } from './calendar-event';


/** A Google Calendar API Response. */
export interface GcalApiResponse {
  /** A collection of Google Calendar events. */
  items: CalendarEvent[];
}
