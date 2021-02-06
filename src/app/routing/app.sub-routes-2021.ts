import { TAG_WEB } from './../utils/tags';
import { authorList } from './../data/authors';
import { TAG_TALKS, TAG_INFOSEC, TAG_CONVENTION, TAG_COMMUNITY } from '../utils/tags';
import { UnderConstructionComponent } from './../content/posts/2021/under-construction/under-construction.component';
import { Routes } from '@angular/router';
import { FebHelloWorldComponent } from '../content/posts/2021/feb-hello-world/feb-hello-world.component';

/**
 *
 * Example:
 * ```
 * export const subroutesXXXX: Routes = [
 *  {
 *    path: '',
 *    component: Component,
 *    data: {
 *      authors: [ authorList["authorName"] ],
 *      description: '', // optional
 *      image_url: '', // optional
 *      tags: [ TAG_YYYY ]
 *    }
 *  }
 * ]
 * ```
 */
export const subroutes2021: Routes = [
  {
    path: '2021_02_06+Hello-World',
    component: FebHelloWorldComponent,
    data: {
      authors: [ authorList["AtomicNicos"], authorList["Mrs. Skelli"], authorList["Night"] ],
      description: 'Introducing Digital Overdose\'s spanking new website.',
      image_url: '/assets/images/cover.jfif',
      tags: [ TAG_COMMUNITY, TAG_WEB ],
    }
  },
];
