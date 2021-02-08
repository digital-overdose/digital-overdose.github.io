import { Post } from './post';

/** An object of year to Post[]. */
export interface PostMap {
  /** The number that serves as key to the related Post[]. */
  [key: number]: Post[];
}
