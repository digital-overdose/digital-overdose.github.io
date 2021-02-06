import { SharedModule } from './shared.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './common-ui/header/header.component';
import { FooterComponent } from './common-ui/footer/footer.component';
import { MainBodyComponent } from './common-ui/main-body/main-body.component';
import { CommunityComponent } from './content/community/community.component';
import { ConferenceComponent } from './content/conference/conference.component';
import { TeamComponent } from './content/team/team.component';
import { PostsInventoryComponent } from './content/posts/posts-inventory/posts-inventory.component';
import { YoutubeComponent } from './content/redirects/youtube/youtube.component';
import { DiscordComponent } from './content/redirects/discord/discord.component';
import { NotFound404Component } from './content/not-found404/not-found404.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainBodyComponent,
    CommunityComponent,
    ConferenceComponent,
    TeamComponent,
    PostsInventoryComponent,
    YoutubeComponent,
    DiscordComponent,
    NotFound404Component
  ],
  imports: [
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
