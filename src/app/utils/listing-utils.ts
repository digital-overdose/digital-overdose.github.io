
import { KeyValue } from '@angular/common';
import { Post } from '../interfaces/post';

/**
 * Function that groups {@link Object | elements} in an {@link Post[] | array of Posts} by a certain key within the {@link Post}.
 *
 * @param xs A collection of {@link Post | Posts}.
 * @param key The key within the tags of {@link Post} that they should be grouped by.
 * @export
 */
export function groupBy<TItem>(xs: TItem[], key: string): {[key: string]: TItem[]} {
  return xs.reduce((rv, x) => {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});
}

/** {@link RegExp | Regular Expression} that finds the underscore (_) character. */
export const reToSlash: RegExp = /_/gi;

/** {@link RegExp | Regular Expression} that finds the plus (+) character. */
export const reToDashSep: RegExp = /\+/gi;

/** {@link RegExp | Regular Expression} that finds the dash (-) character. */
export const reToSpace: RegExp = /-/gi;

/**
 * Function that sorts an {@link Object} of {@link Post | Posts} sorted by year based on their year in decreasing order (most recent first).
 *
 * @export
 */
export function keyDescOrder(a: KeyValue<string, Post[]>, b: KeyValue<string, Post[]>): number {
  return +a.key > +b.key ? -1 : (+b.key > +a.key ? 1 : 0);
}

/**
 * Function that replaces certain characters in a {@param {string} path } to a legible representation.
 *
 * @export
 */
export function stringify(path: string): string {
  return path.replace(reToSlash, '/').replace(reToSpace, ' ').replace(reToDashSep, ' - ');
}

/**
 * Function that translates a numerical month to it's shortened text equivalent.
 *
 * @param month The numerical value of the month (January = 1)
 * @export
 */
export function getMonth(month: number): string {
  return ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May', 'Jun.', 'Jul.', 'Aug.', 'Sep.', 'Oct.', 'Nov.', 'Dec.'][month - 1];
}

/**
 * Function that finds the appropriate date hint for a given day.
 *
 * @param day The numerical value of the day.
 * @export
 */
export function getDay(day: number): string {
  if ([1, 21, 31].includes(day)) {
    return `${day}st`;
  } else if ([2, 22].includes(day)) {
    return `${day}nd`;
  } else if ([3, 23].includes(day)) {
    return `${day}rd`;
  } else {
    return `${day}th`;
  }
}
