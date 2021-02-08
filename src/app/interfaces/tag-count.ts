
/**
 * Represent the amount of posts tagged with a certain name.
 *
 * @export
 */
export interface TagCount {
  /** The name of the tag. */
  tag_name: string;

  /** The amount of posts tagged. */
  count: number;
}
