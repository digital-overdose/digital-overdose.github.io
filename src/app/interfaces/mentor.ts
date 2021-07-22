import { SocialsLink } from './author/socials-link';

/** Represents a Digital Overdose team member. */
export interface Mentor {
  /** Their name. */
  name: string;

  /** Their alias. */
  alias?: string[];

  /** The link to their image. */
  imageUrl: string;

  links?: SocialsLink[];
}
