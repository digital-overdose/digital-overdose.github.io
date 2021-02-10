# Digital Overdose Website

## Cloning the repository

```bash
git clone https://github.com/digital-overdose/digital-overdose.github.io
cd digital-overdose.github.io
npm install
```

## Table of Contents

- [Cloning the repository](#cloning-the-repository)
- [Development Specific Information](#development-specific-information)
  - [Running the Dev Local Server](#development-server)
  - [Adding code to the project scaffold](#adding-code-to-the-project-scaffold)
  - [Prerendering content for deployment](#prerendering-the-files-for-deployment)
  - [Serving the site to GitHub pages](#serving-the-site-to-github-pages)
  - [Compiling the documentation](#compiling-the-documentation)
- [Adding content](#adding-content)
  - [Adding a year to the site's routing](#adding-a-year-of-content)
  - [Adding a tag](#adding-a-tag)
  - [Adding an article](#adding-an-article)
  - [Adding an author](#adding-an-author)
- [Angular Specific Information](#angular-specific-information)
  - [Running unit tests](#running-unit-tests)
  - [Running end-to-end tests](#running-end-to-end-tests)

## Development Specific Information

### Prerendering the files for deployment

Run `npm run prerender` ! Past Nicos bids you hello.

___

### Adding code to the project scaffold

Run `ng generate component path/to/component-name --module=<parent-module-name>` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

___

### Development server

Run `ng serve --open` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

___

### Serving the site to GitHub Pages

From the finalized `main` branch, run the `./update-gh-pages.sh` command in your Git terminal.

___

### Compiling the documentation

Run the `compodoc -p tsconfig.app.json` command in your terminal to compile the documentation. It can be viewed in `/documentation`.

For a live documentation site, run the `compodoc -p tsconfig.app.json src -s` command in your terminal and visit [http://127.0.0.1:8080](`http://127.0.0.1:8080`) in your browser.

___

## Adding content

### Adding a year of content

Create the file `submodules/app-content-XXXX.module.ts`.

Within it, write the following:

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

Don't forget to update `static.paths.txt`, `static.paths.ts`, `sitemap.xml` and `rss.xml`.

___

### Adding a tag

Go to `utils/tags.ts` and add a tag:

```typescript
export const TAG_XXXX: Tag = { name: 'Random' }
```

Then you simply need to reference it from the `routing/app.sub-routes-XXXX.ts` and update `static.paths.txt`, `static.paths.ts`, `sitemap.xml` and `rss.xml` and you'll be all set.

___

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

Don't forget to update `static.paths.txt`, `static.paths.ts`, `sitemap.xml` and `rss.xml`.

___

### Adding an author

One can add an author by editing the `data/authors.ts` file and adding the relevant fields to an author:

```typescript
export const authorList: AuthorMap = {
  /// ... Other authors
  "reference": {
    name: "username",
    bio: "A semi-short description.",
    // A link towards the local avatar of the author (ideally 300x300)
    avatar: "/assets/images/authors/XXXXX", 
    links: [
      {
        label: "Twitter", // Link name
        icon: "fab fa-fw fa-twitter-square", // Link fontawesome icon class
        url: "https://twitter.com/XXXX",  // Actual URL of the link
      },
      // Can add as many as desired
    ]
  }
}
```

___

## Angular Specific Information

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

___

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
