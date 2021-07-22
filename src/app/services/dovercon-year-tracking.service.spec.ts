import { TestBed } from '@angular/core/testing';

import { DoverconYearTrackingService } from './dovercon-year-tracking.service';

describe('DoverconYearTrackingService', () => {
  let service: DoverconYearTrackingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DoverconYearTrackingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
