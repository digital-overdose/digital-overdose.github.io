import { SocialsLink } from './author/socials-link';

/** Represents a {@link Post | Post's} author. */
export interface Author {
  /** The name of the Author. */
  name: string;

  /** The Author's bio */
  bio: string;

  /** The Author's avatar. */
  avatar: string;

  /** An assortment of Social Media links. */
  links: SocialsLink[];
}
