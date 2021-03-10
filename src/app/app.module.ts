
import { SharedModule } from './shared.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, Injector, APP_INITIALIZER } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './content/common-ui/header/header.component';
import { FooterComponent } from './content/common-ui/footer/footer.component';
import { MainBodyComponent } from './content/common-ui/main-body/main-body.component';

import { HomeComponent } from './content/home/home.component';
import { ConferenceComponent } from './content/conference/conference.component';
import { TeamComponent } from './content/team/team.component';
import { CopyrightComponent } from './content/copyright/copyright.component';
import { PrivacyPolicyComponent } from './content/privacy-policy/privacy-policy.component';
import { ContributionGuidelinesComponent } from './content/contribution-guidelines/contribution-guidelines.component';

import { PostsNoFilterComponent } from './content/common-ui/post-inventory-display/posts-no-filter/posts-no-filter.component';
import { PostsFilteredByTagComponent } from './content/common-ui/post-inventory-display/posts-filtered-by-tag/posts-filtered-by-tag.component';
import { PostsFilteredByAuthorComponent } from './content/common-ui/post-inventory-display/posts-filtered-by-author/posts-filtered-by-author.component';

import { YoutubeComponent } from './content/redirects/youtube/youtube.component';
import { DiscordComponent } from './content/redirects/discord/discord.component';
import { NotFound404Component } from './content/not-found404/not-found404.component';

import { App2021Module } from './submodules/app-content-2021.module';

import { SocialButtonComponent } from './content/common-ui/social-button/social-button.component';
import { CalendarComponent } from './content/home/calendar/calendar.component';
import { CalendarCardComponent } from './content/home/calendar/calendar-card/calendar-card.component';

import { PostsCardNormalComponent } from './content/common-ui/posts-card/posts-card-normal/posts-card-normal.component';
import { PostsCardCompactComponent } from './content/common-ui/posts-card/posts-card-compact/posts-card-compact.component';
import { PostsCardCompactHeaderComponent } from './content/common-ui/posts-card/posts-card-compact-header/posts-card-compact-header.component';

import { ServiceLocator } from './utils/service.locator';
import { BrowserTransferStateModule } from '@angular/platform-browser';
import { AppDoverconModule } from './submodules/app-dovercon.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainBodyComponent,

    HomeComponent,
    TeamComponent,
    ConferenceComponent,
    ContributionGuidelinesComponent,
    CopyrightComponent,
    PrivacyPolicyComponent,

    PostsNoFilterComponent,
    PostsFilteredByTagComponent,
    PostsFilteredByAuthorComponent,

    YoutubeComponent,
    DiscordComponent,
    NotFound404Component,

    SocialButtonComponent,
    CalendarComponent,
    CalendarCardComponent,

    PostsCardNormalComponent,
    PostsCardCompactComponent,
    PostsCardCompactHeaderComponent
  ],
  imports: [
    SharedModule,
    App2021Module,
    AppDoverconModule,
    BrowserTransferStateModule,
    // App2022Module
  ],
  providers: [ ],
  bootstrap: [ AppComponent ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule {
  constructor(private injector: Injector) {    // Create global Service Injector.
      ServiceLocator.injector = this.injector;
  }
}
