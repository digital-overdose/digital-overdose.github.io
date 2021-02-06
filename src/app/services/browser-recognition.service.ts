import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BrowserRecognitionService {
  private _isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId) {
    this._isBrowser = isPlatformBrowser(platformId);
  }

  get isBrowser() { return this._isBrowser ?? false; }
}
