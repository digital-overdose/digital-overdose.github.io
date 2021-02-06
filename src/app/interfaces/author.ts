import { SocialsLink } from './author/socials-link';

export interface Author {
  name: string,
  bio: string,
  avatar: string,
  links: SocialsLink[]
}
