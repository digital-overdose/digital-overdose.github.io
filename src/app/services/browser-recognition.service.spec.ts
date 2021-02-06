import { TestBed } from '@angular/core/testing';

import { BrowserRecognitionService } from './browser-recognition.service';

describe('BrowserRecognitionService', () => {
  let service: BrowserRecognitionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BrowserRecognitionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
