import { Author } from './author';
import { Tag } from './tag';

/**
 * Represents a Post.
 *
 * @export
 */
export interface Post {
  /** The year this Post was published on. */
  year: number;

  /** The URL of the site, stripped of it's domain. */
  path: string;

  /** The title of the Post. */
  title: string;

  /** A description of the contents of the Post. */
  description?: string;

  /** A URL used for the Post header image. */
  image_url?: string;

  /** A list of {@link Tag | tags} the Post is flagged with. */
  tags?: Tag[];

  /** A list of {@link Author | authors} that collaborated on the Post. */
  authors?: Author[];
}
