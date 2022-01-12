import { TestBed } from '@angular/core/testing';

import { ConferenceYearTrackingService } from './conference-year-tracking.service';

describe('ConferenceYearTrackingService', () => {
  let service: ConferenceYearTrackingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConferenceYearTrackingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
