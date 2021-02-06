import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'digital-overdose' }),
    AppRoutingModule,
    CommonModule
  ],
  exports: [
    CommonModule,
    AppRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }
