import { SocialsLink } from './author/socials-link';

/** Represents a Digital Overdose team member. */
export interface TeamMember {
  /** Their name. */
  name: string;

  /** Their alias. */
  alias?: string[];

  /** A summary description of their role. */
  description: string;

  /** The link to their image. */
  imageUrl: string;

  links?: SocialsLink[];
}
