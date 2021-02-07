import { Author } from './author';
import { Tag } from './tag';
export interface Post {
  year: number;
  path: string;
  title: string;
  description?: string;
  image_url?: string;
  tags?: Tag[];
  authors?: Author[];
}
