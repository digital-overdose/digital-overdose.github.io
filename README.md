# Digital Overdose Website

## Angular Specific Information

### Actually prerendering the files

Run `npm run prerender` ! Past Nicos bids you hello.

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Adding content

### Adding a year of content

Create the file `submodules/app-content-XXXX.module.ts`.

Within it, write the following

```typescript
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  declarations: [ ],
  imports: [
    CommonModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppXXXXModule { }
```

Create the file `routing/app-sub-routes-XXXX.ts`. Within it write the following:

```typescript
import { authorList } from './../data/authors';
import { TAG_TALKS, TAG_INFOSEC, TAG_CONVENTION, TAG_COMMUNITY } from '../utils/tags';
import { Routes } from '@angular/router';

export const subroutesXXXX: Routes = [

/** Example:
 * ```
 * export const subroutesXXXX: Routes = [
 *  {
 *    path: '',
 *    component: Component,
 *    data: {
 *      title: '',
 *      authors: [ authorList["authorName"] ],
 *      description: '', // optional
 *      image_url: '', // optional
 *      tags: [ TAG_YYYY ]
 *    }
 *  }
 * ]
 * ```
 */
];
```

Then create the file `routing/app-content-XXXX-routing.module.ts`, and insert the followin within:

```typescript
# Digital Overdose Website

## Angular Specific Information

### Actually prerendering the files

Run `npm run prerender` ! Past Nicos bids you hello.

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Adding content

### Adding a year of content

Create the file `submodules/app-content-XXXX.module.ts`.

Within it, write the following

```typescript
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  declarations: [ ],
  imports: [
    CommonModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppXXXXModule { }
```

Create the file `routing/app-sub-routes-XXXX.ts`. Within it write the following:

```typescript
import { authorList } from './../data/authors';
import { TAG_TALKS, TAG_INFOSEC, TAG_CONVENTION, TAG_COMMUNITY } from '../utils/tags';
import { Routes } from '@angular/router';

export const subroutesXXXX: Routes = [

/** Example:
 * ```
 * export const subroutesXXXX: Routes = [
 *  {
 *    path: '',
 *    component: Component,
 *    data: {
 *      title: '',
 *      authors: [ authorList["authorName"] ],
 *      description: '', // optional
 *      image_url: '', // optional
 *      tags: [ TAG_YYYY ]
 *    }
 *  }
 * ]
 * ```
 */
];
```

Then create the file `routing/app-content-XXXX-routing.module.ts`, and insert the followin within:

```typescript
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { subroutesXXXX } from './app.sub-routes-XXXX';

@NgModule({
  imports: [RouterModule.forChild(subroutesXXXX)],
  exports: [RouterModule]
})
export class PostsXXXXRoutingModule { }

```

Finally, link it to the rest in `app-routing.module.ts`:

```typescript

const routes: Routes = [
  // ***
  {
    path: 'post/XXXX',
    loadChildren: () => import('./routing/app-content-XXXX-routing.module').then(m => m.PostsXXXXRoutingModule)
  },
  // ***
];

```

Don't forget to update `static.routes.txt`, `static.routes.ts`, `sitemap.xml` and `rss.xml`.

### Adding a tag

Go to `utils/tags.ts` and add a tag:

```typescript
export const TAG_XXXX: Tag = { name: 'Random' }
```

Then you simply need to reference it from the `routing/app.sub-routes-XXXX.ts` and update `static.routes.txt`, `static.routes.ts`, `sitemap.xml` and `rss.xml` and you'll be all set.

### Adding an article

One can add an article by using the following command:

```typescript
ng g c content/posts/XXXX/random-unique-name --module=submodules/app-content-XXXX
```

Within, the HTML file, one must set write the following:

```typescript
<app-post [created]="[2020, 02, 06]"> // [edited] is optional.
  <p>Your content here.</p>
</app-post>

```

Anything can be entered in between the `app-post` tags.

Don't forget to update `static.routes.txt`, `static.routes.ts`, `sitemap.xml` and `rss.xml`.
