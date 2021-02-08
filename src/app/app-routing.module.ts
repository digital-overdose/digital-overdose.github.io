
import { NgModule } from '@angular/core';
import { RouterModule, PreloadAllModules, Route } from '@angular/router';

import { HomeComponent } from './content/home/home.component';
import { ConferenceComponent } from './content/conference/conference.component';
import { CommunityComponent } from './content/community/community.component';
import { TeamComponent } from './content/team/team.component';
import { PrivacyPolicyComponent } from './content/privacy-policy/privacy-policy.component';
import { CopyrightComponent } from './content/copyright/copyright.component';

import { YoutubeComponent } from './content/redirects/youtube/youtube.component';
import { DiscordComponent } from './content/redirects/discord/discord.component';
import { NotFound404Component } from './content/not-found404/not-found404.component';

import { PostsNoFilterComponent } from './content/common-ui/post-inventory-display/posts-no-filter/posts-no-filter.component';
import { PostsFilteredByTagComponent } from './content/common-ui/post-inventory-display/posts-filtered-by-tag/posts-filtered-by-tag.component';
import { PostsFilteredByAuthorComponent } from './content/common-ui/post-inventory-display/posts-filtered-by-author/posts-filtered-by-author.component';

/** {@link Route[] | Routes} used to navigate the application. */
const routes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'community',
    component: CommunityComponent
  },
  {
    path: 'team',
    component: TeamComponent
  },
  {
    path: 'conference',
    component: ConferenceComponent
  },
  {
    path: 'posts',
    component: PostsNoFilterComponent,
  },
  {
    path: 'copyright',
    component: CopyrightComponent,
    data: {
      title: 'Copyright Policy',
    }
  },
  {
    path: 'privacy',
    component: PrivacyPolicyComponent,
    data: {
      title: 'Privacy Policy',
    }
  },
  {
    path: 'tags',
    component: PostsFilteredByTagComponent,
  },
  {
    path: 'tags/:filter',
    component: PostsFilteredByTagComponent,
  },
  {
    path: 'authors',
    component: PostsFilteredByAuthorComponent,
  },
  {
    path: 'authors/:author',
    component: PostsFilteredByAuthorComponent,
  },
  {
    path: 'post/2021',
    loadChildren: () => import('./routing/app-content-2021-routing.module').then(m => m.Posts2021RoutingModule)
  },
  /*
  {
    path: 'post/2022',
    loadChildren: () => import('./routing/app-content-2022-routing.module').then(m => m.Posts2022RoutingModule)
  },
  */
  {
    path: 'youtube',
    component: YoutubeComponent,
  },
  {
    path: 'discord',
    component: DiscordComponent
  },
  {
    path: '404-not-found',
    component: NotFound404Component
  },
  {
    path: '**',
    redirectTo: '/404-not-found'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabled',
      relativeLinkResolution: 'legacy',
      preloadingStrategy: PreloadAllModules,
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
      scrollOffset: [0, 64],
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
