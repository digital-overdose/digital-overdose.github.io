import { TestBed } from '@angular/core/testing';

import { CalendarService } from './google-cal.service';

describe('GoogleCalService', () => {
  let service: CalendarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalendarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
