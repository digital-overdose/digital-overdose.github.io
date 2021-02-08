import { Author } from './author';

/** An object listing authors by their name. */
export interface AuthorMap {
  /** The string by which the {@link Author | author} is identified. */
  [key: string]: Author;
}
