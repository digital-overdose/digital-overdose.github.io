import { CalendarEvent } from "../interfaces/calendar/calendar-event";

function sanitizeDate(date: string): string {
  return date.replace(/\-/g, '').replace(/\:/g, '');
}

export function createCalendarLink(event: CalendarEvent): string {
  return `https://calendar.google.com/calendar/render?action=TEMPLATE&dates=${sanitizeDate(event.start)}%2F${sanitizeDate(event.end)}&location=${encodeURIComponent(event.location)}&text=${encodeURIComponent(event.summary)}`;
}