import { TagCount } from '../interfaces/tag-count';
import { Tag } from '../interfaces/tag';
import { Post } from '../interfaces/post';
import { Route, Routes } from '@angular/router';
import { subroutes2021 } from '../routing/app.sub-routes-2021';
import { Author } from '../interfaces/author';
//import { subroutes2022 } from './app.sub-routes-2022';

const routes: Routes = [...subroutes2021, /* ...subroutes2022 */];

/**
 * Function that counts the number of [[Post]] per [[Tag]].
 *
 * @export
 * @returns {TagCount[]}
 */
export function countTags(): TagCount[] {
  let output: TagCount[] = [];
  for (let r of routes) {
    if (r.data !== undefined && r.data.tags !== undefined) {
      for (let t of r.data.tags) {
        if (output.map(x => x.tag_name).includes(t.name)) {
          output.filter(x => x.tag_name == t.name)[0].count += 1;
        } else {
          output.push({ tag_name: t.name, count: 1});
        }
      }
    }
  }

  return output;
}

/**
 * Function that returns all of the [[Post]]s that possess the @param { string  } filter [[Tag]]
 *
 * @export
 * @param {string} filter - The tag to filter by.
 * @returns {Post[]}
 */
export function filterPostRoutesByTag(filter: string): Post[] {
  return routes.filter((x: Route) => x.data.tags.map((y: Tag) => y.name).includes(filter))
    .sort((a: Route, b: Route) => (a.path > b.path ? -1 : 1))
    .map((r: Route) => ({
      year: Number.parseInt(r.path.slice(0, 4), 10),
      path: r.path,
      description: r.data.description,
      title: r.path.slice(11),
      image_url: r.data.image_url ?? '',
      tags: r.data.tags,
      authors: r.data.authors
    }));
}

/**
 * Function that returns all of the [[Post]]s that possess the @param { string  } author [[Author]]
 *
 * @export
 * @param {string} author - The author to filter by.
 * @returns {Post[]}
 */
export function filterPostRoutesByAuthor(author: string): Post[] {
  return routes.filter((x: Route) => x.data.authors.map((y: Author) => y.name).includes(author))
    .sort((a: Route, b: Route) => (a.path > b.path ? -1 : 1))
    .map((r: Route) => ({
      year: Number.parseInt(r.path.slice(0, 4), 10),
      path: r.path,
      description: r.data.description,
      title: r.path.slice(11),
      image_url: r.data.image_url ?? '',
      tags: r.data.tags,
      authors: r.data.authors
    }));
}

/**
 * Function that returns all of the [[Post]]s
 *
 * @export
 * @returns {Post[]}
 */
export function generatePostRoutes(): Post[] {
  return routes.sort((a: Route, b: Route) => (a.path > b.path ? -1 : 1))
    .map((r: Route) => ({
      year: Number.parseInt(r.path.slice(0, 4), 10),
      path: r.path,
      description: r.data.description,
      title: r.path.slice(11),
      image_url: r.data.image_url ?? '',
      tags: r.data.tags,
      authors: r.data.authors
    }));
}
