/** A Google Calendar Event. */
export interface CalendarEvent {
  /** The title of the Event.  */
  summary: string;

  /** The start time of the event. */
  start: string;

  /** The finish time of the event. */
  end: string;

  /** The location of the event. */
  location: string;
}
