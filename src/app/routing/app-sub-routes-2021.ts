import { authorList } from 'src/app/data/authors';
import { TAG_TALKS, TAG_INFOSEC, TAG_CONFERENCE, TAG_COMMUNITY, TAG_WEB } from 'src/app/utils/tags';
import { Routes } from '@angular/router';
import { Feb2021HelloWorldComponent } from 'src/app/content/posts/2021/210206-feb-hello-world/feb-hello-world.component';

/**
 *
 * Example:
 * ```
 * export const subroutesXXXX: Routes = [
 *  {
 *    path: '',
 *    component: Component,
 *    data: {
 *      title: '',
 *      authors: [ authorList["authorName"] ],
 *      description: '', // optional
 *      imageUrl: '', // optional
 *      tags: [ TAG_YYYY ]
 *    }
 *  }
 * ]
 * ```
 */
export const subroutes2021: Routes = [
  {
    path: '2021_02_06+Hello-World',
    component: Feb2021HelloWorldComponent,
    data: {
      title: 'Hello World!',
      authors: [ authorList['AtomicMaya'], authorList['Mrs. Skelli'], authorList['Night'] ],
      description: 'Introducing Digital Overdose\'s new window into the community.',
      imageUrl: '/assets/images/cover.jfif',
      tags: [ TAG_COMMUNITY, TAG_WEB ],
    }
  },
];
