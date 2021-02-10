import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { PostComponent } from './content/common-ui/post/post.component';
import { AuthorCardComponent } from './content/common-ui/post/author-card/author-card.component';
import { PostSidebarComponent } from './content/common-ui/post/post-sidebar/post-sidebar.component';
import { PostBodyComponent } from './content/common-ui/post/post-body/post-body.component';

import { PostInventoryDisplayComponent } from './content/common-ui/post-inventory-display/post-inventory-display.component';

@NgModule({
  declarations: [
    PostComponent,
    AuthorCardComponent,
    PostSidebarComponent,
    PostBodyComponent,
    PostInventoryDisplayComponent,
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
    PostSidebarComponent,
    PostBodyComponent,
    PostInventoryDisplayComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }
