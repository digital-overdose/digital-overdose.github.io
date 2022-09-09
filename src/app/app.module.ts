import { App2022Module } from './submodules/app-content-2022.module';
import { TwitchComponent } from './content/redirects/twitch/twitch.component';

import { CUSTOM_ELEMENTS_SCHEMA, Injector, NgModule } from '@angular/core';
import { SharedModule } from './shared.module';

import { AppComponent } from './app.component';
import { FooterComponent } from './content/common-ui/footer/footer.component';
import { HeaderComponent } from './content/common-ui/header/header.component';
import { MainBodyComponent } from './content/common-ui/main-body/main-body.component';

import { ContributionGuidelinesComponent } from './content/contribution-guidelines/contribution-guidelines.component';
import { CopyrightComponent } from './content/copyright/copyright.component';
import { HomeComponent } from './content/home/home.component';
import { PrivacyPolicyComponent } from './content/privacy-policy/privacy-policy.component';
import { TeamComponent } from './content/team/team.component';

import { PostsFilteredByAuthorComponent } from './content/common-ui/post-inventory-display/posts-filtered-by-author/posts-filtered-by-author.component';
import { PostsFilteredByTagComponent } from './content/common-ui/post-inventory-display/posts-filtered-by-tag/posts-filtered-by-tag.component';
import { PostsNoFilterComponent } from './content/common-ui/post-inventory-display/posts-no-filter/posts-no-filter.component';

import { NotFound404Component } from './content/not-found404/not-found404.component';
import { DiscordComponent } from './content/redirects/discord/discord.component';
import { YoutubeComponent } from './content/redirects/youtube/youtube.component';

import { App2021Module } from './submodules/app-content-2021.module';

import { CalendarCardComponent } from './content/home/calendar/calendar-card/calendar-card.component';
import { CalendarComponent } from './content/home/calendar/calendar.component';

import { PostsCardCompactHeaderComponent } from './content/common-ui/posts-card/posts-card-compact-header/posts-card-compact-header.component';
import { PostsCardCompactComponent } from './content/common-ui/posts-card/posts-card-compact/posts-card-compact.component';
import { PostsCardNormalComponent } from './content/common-ui/posts-card/posts-card-normal/posts-card-normal.component';

import { BrowserTransferStateModule } from '@angular/platform-browser';
import { CodeOfConductComponent } from './content/code-of-conduct/code-of-conduct.component';
import { CfpFormComponent } from './content/redirects/cfpform/cfpform.component';
import { YoutubePlaylistRedirectComponent } from './content/redirects/youtube-playlist-redirect/youtube-playlist-redirect.component';
import { YoutubePlaylistRedirect2Component } from './content/redirects/youtube-playlist-redirect2/youtube-playlist-redirect2.component';
import { AppConference2021Module } from './submodules/app-conference-2021.module';
import { AppConference2022Module } from './submodules/app-conference-2022.module';
import { AppCTFModule } from './submodules/app-ctf.module';
import { ServiceLocator } from './utils/service.locator';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainBodyComponent,

    HomeComponent,
    TeamComponent,
    ContributionGuidelinesComponent,
    CopyrightComponent,
    PrivacyPolicyComponent,

    PostsNoFilterComponent,
    PostsFilteredByTagComponent,
    PostsFilteredByAuthorComponent,

    YoutubeComponent,
    TwitchComponent,
    DiscordComponent,
    CfpFormComponent,
    NotFound404Component,

    CalendarComponent,
    CalendarCardComponent,

    PostsCardNormalComponent,
    PostsCardCompactComponent,
    PostsCardCompactHeaderComponent,
    YoutubePlaylistRedirectComponent,
    YoutubePlaylistRedirect2Component,
    CodeOfConductComponent
  ],
  imports: [
    SharedModule,
    App2021Module,
    App2022Module,
    AppConference2021Module,
    AppConference2022Module,
    AppCTFModule,
    BrowserTransferStateModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
  constructor(private injector: Injector) {    // Create global Service Injector.
    ServiceLocator.injector = this.injector;
  }
}
