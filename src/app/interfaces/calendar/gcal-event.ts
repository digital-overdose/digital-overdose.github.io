/** A Google Calendar Event. */
export interface GcalEvent {
  /** The title of the Event.  */
  summary: string;

  /** The start time of the event. */
  start: {
    dateTime: string;
  };

  /** The finish time of the event. */
  end: {
    dateTime: string;
  };

  /** The link to the calendar event. */
  htmlLink: string;
}
