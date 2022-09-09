
# CONTRIBUTING

**For any questions please reach out to Atomic, you probably know how.**

<hr/>

Fork the repository.

Clone it to your machine.

Make sure you have `Node v14.16.0` or similar installed.

> You may use nvm to switch node versions.

Run `npm install` in the root directory.

Run `ng serve --open` to serve a local instance of the website, usually available at `http://localhost:4200`.

## SETTING UP YOUR NEW POST

### Initial generation

Run `ng g c content/posts/<year>/<name-of-your-post> --module=submodules/app-content-<year>`

<hr/>

### Initial remapping

Rename the newly created folder at `content/posts/<year>/<name-of-your-post>` to `content/posts/<year>/YYMMDD-<name-of-your-post>` (YYMMDD being the date you have started writing the post).
> Update `submodules/app-content-<year>` to reflect this new path if your IDE has not done so automatically.

In the file `content/posts/<year>/YYMMDD-<name-of-your-post>/<name-of-your-post>.ts` rename the `Component` from `<NameOfYourPost>Component` to `Mmm<year><NameOfYourPost>Component` (with Mmm being the 3 letter abbreviation for the month the post was written in, e.g. Jan, Feb, Mar, Apr, ...)
> Update `submodules/app-content-<year>` to reflect this new component name if your IDE has not done so automatically.

<hr/>

### TypeScript

In the file `content/posts/<year>/YYMMDD-<name-of-your-post>/<name-of-your-post>.ts`, start with the following base in your `Mmm<year><NameOfYourPost>Component` class:

```ts
export class Mmm<year><NameOfYourPost>Component implements OnInit {
  constructor(private meta: MetaService) { }

  /** Set the page metadata information. */
  ngOnInit(): void {
    this.meta.setTags(`${BASE_URL}/post/YYYY/YYYY_MM_DD+name-of-your-post`, 'Post title',
                      `${BASE_URL}/assets/images/a-cover-image`, 750, 750,
                      ['a', 'series', 'of tags', 'for your convenience', 'and SEO']);}
}
```

> Don't forget to import `MetaService` from `src/app/services/meta.service` and `BASE_URL` from `src/app/data/url`.

<hr/>

### HTML

In the file `content/posts/<year>/YYMMDD-<name-of-your-post>/<name-of-your-post>.html`, start with the following base:

```html
<app-post [created]="[YYYY, MM, DD]" [edited]="[YYYY, MM, DD]">
  <!-- YOUR CONTENT HERE -->
</app-post>
```

## AUTHOR SHEET

*Note: Only required on first contributio* 

In the file `data/authors.ts`, add and complete the following structure to the `authors` AuthorMap:

```js
'YourNameOrAlias': {
    name: 'Your Name or Alias, and more',
    bio: 'A biography',
    avatar: '/assets/images/authors/your-image.ext',
    links: [
      {
        label: 'Blog',
        icon: 'fas fa-fw fa-globe',
        url: 'https://link',
      },
      ...
    ]
  },
```

> If adding an image, please add it to `/assets/images/authors/`.

> For more label icons, please see the `authors.ts` file for inspiration or the FontAwesome icon list.

> You need only modify this file to have changes replicate accross the website.

## ROUTING

In the file `routing/app-sub-routes-<year>.ts`, add and complete the following structure to the `subroutes<year>` array:

```js
  {
    path: 'YYYY_MM_DD+name-of-your-post-url',
    component: MmmYYYYNameOfYourPostComponent,
    data: {
      title: 'Your post title',
      authors: [ authorList['YourNameOrAlias'] ],
      description: 'A description of your post / the topics covered.',
      imageUrl: '/assets/images/a-cover-image.ext',
      tags: [ TAG_YYYY ],
    }
  },
```

## SSR AND SEO

### `/static.paths.txt`

Add the URL `/post/<year>/YYYY_MM_DD+name-of-your-post-url` to the file at the bottom.

### `/static.paths.ts`

Add the URL `/post/<year>/YYYY_MM_DD+name-of-your-post-url` as a string in the `ROUTES` array.

### `/src/sitemap.xml`

Add the following structure as the last element of the `<urlset>` array:

```xml
  <url>
    <loc>https://digitaloverdose.tech/post/YYYY/YYYY_MM_DD+name-of-your-post-url</loc>
    <priority>0.50</priority>
    <changefreq>weekly</changefreq>
  </url>
```

### `/src/rss.xml`

Add the following structure as the last element of the `<rss><channel>` element:

```xml
  <item>
    <title>Your post title!</title>
    <link>https://digitaloverdose.tech/post/YYYY/YYYY_MM_DD+name-of-your-post-url</link>
    <description>Your Post description.</description>
    <guid>digitaloverdose/post-YYYY-<next-numerical-index></guid>
    <pubDate>ddd, mmm. nth, YYYY</pubDate>
  </item>
```

## PRERENDERING AND TESTING

Run `npm run prerender`

Navigate to the `/dist/digitaloverdose.github.io/browser` directory.

Start a local server.

> I like to use Python3: `python3 -m http.server 8000` and access it in a browser at http://localhost:8000

## COMMITTING

Run the following commands:

```sh
git add .
git reset ./dist
git commit -m "A custom commit message"
git push -u origin main
```

> Make sure to configure your user.name and user.email in the local repository config if you wish to limit the information that could be available in a commit message / git log.

> `git config user.name "NAME <EMAIL>"`

> `git config user.email "EMAIL"`

## PULL REQUEST

When finished with your contributions, open a pull request on GitHub, and possibly also send Atomic a message.
