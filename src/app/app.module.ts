import { SharedModule } from './shared.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './common-ui/header/header.component';
import { FooterComponent } from './common-ui/footer/footer.component';
import { MainBodyComponent } from './common-ui/main-body/main-body.component';

import { HomeComponent } from './content/home/home.component';
import { CommunityComponent } from './content/community/community.component';
import { ConferenceComponent } from './content/conference/conference.component';
import { TeamComponent } from './content/team/team.component';

import { PostsInventoryComponent } from './content/posts/posts-inventory/posts-inventory.component';
import { PostsFilteredByTagComponent } from './content/posts/posts-filtered-by-tag/posts-filtered-by-tag.component';
import { PostsFilteredByAuthorComponent } from './content/posts/posts-filtered-by-author/posts-filtered-by-author.component';

import { YoutubeComponent } from './content/redirects/youtube/youtube.component';
import { DiscordComponent } from './content/redirects/discord/discord.component';
import { NotFound404Component } from './content/not-found404/not-found404.component';

import { App2021Module } from './submodules/app-content-2021.module';
//import { App2022Module } from './submodules/app-content-2022.module';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainBodyComponent,

    HomeComponent,
    CommunityComponent,
    ConferenceComponent,
    TeamComponent,

    PostsInventoryComponent,
    PostsFilteredByTagComponent,
    PostsFilteredByAuthorComponent,

    YoutubeComponent,
    DiscordComponent,
    NotFound404Component,
  ],
  imports: [
    SharedModule,
    App2021Module,
    //App2022Module
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
