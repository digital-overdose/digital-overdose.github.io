import { PostsFilteredByAuthorComponent } from './content/posts/posts-filtered-by-author/posts-filtered-by-author.component';
import { HomeComponent } from './content/home/home.component';
import { PostsFilteredByTagComponent } from './content/posts/posts-filtered-by-tag/posts-filtered-by-tag.component';
import { PostsInventoryComponent } from './content/posts/posts-inventory/posts-inventory.component';
import { ConferenceComponent } from './content/conference/conference.component';
import { CommunityComponent } from './content/community/community.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { TeamComponent } from './content/team/team.component';
import { YoutubeComponent } from './content/redirects/youtube/youtube.component';
import { DiscordComponent } from './content/redirects/discord/discord.component';
import { NotFound404Component } from './content/not-found404/not-found404.component';

const routes: Routes = [
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
    component: PostsInventoryComponent
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
    path: '**',
    component: NotFound404Component
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
