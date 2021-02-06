
import { KeyValue } from "@angular/common";
import { Post } from "../interfaces/post";

export const CURRENT_YEAR = 2021;

export const groupBy = <TItem>(xs: TItem[], key: string): {[key: string]: TItem[]} => {
  return xs.reduce((rv, x) => {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});
}

export const reToSlash: RegExp = /_/gi;
export const reToDashSep: RegExp = /\+/gi;
export const reToSpace: RegExp = /-/gi;

// Order by descending property key
export const keyDescOrder = (a: KeyValue<string,Post[]>, b: KeyValue<string,Post[]>): number => {
  return +a.key > +b.key ? -1 : (+b.key > +a.key ? 1 : 0);
}

export const stringify = (path: string): string => {
  return path.replace(reToSlash, '/').replace(reToSpace, ' ').replace(reToDashSep, ' - ');
}

export const getMonth = (index: number): string => {
  return ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May', 'Jun.', 'Jul.', 'Aug.', 'Sep.', 'Oct.', 'Nov.', 'Dec.'][index - 1];
}

export const getDay = (day: number): string => {
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
