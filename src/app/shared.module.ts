import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AuthorCardComponent } from './content/posts/post/author-card/author-card.component';
import { PostsCardComponent } from './content/posts/posts-card/posts-card.component';

import { PostsCardCompactComponent } from './content/posts/posts-card-compact/posts-card-compact.component';
import { PostsCardCompactHeaderComponent } from './content/posts/posts-card-compact-header/posts-card-compact-header.component';
import { PostComponent } from './content/posts/post/post.component';
import { PostSidebarComponent } from './content/posts/post/post-sidebar/post-sidebar.component';
import { PostBodyComponent } from './content/posts/post/post-body/post-body.component';
@NgModule({
  declarations: [
    PostComponent,
    AuthorCardComponent,
    PostsCardComponent,
    PostsCardCompactComponent,
    PostsCardCompactHeaderComponent,
    PostSidebarComponent,
    PostBodyComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'digital-overdose' }),
    AppRoutingModule,
    HttpClientModule,
    CommonModule
  ],
  exports: [
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
    PostComponent,
    AuthorCardComponent,
    PostsCardComponent,
    PostsCardCompactComponent,
    PostsCardCompactHeaderComponent,
    PostSidebarComponent,
    PostBodyComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }
