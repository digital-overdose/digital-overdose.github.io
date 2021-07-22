import { TestBed } from '@angular/core/testing';

import { GoogleCalService } from './google-cal.service';

describe('GoogleCalService', () => {
  let service: GoogleCalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GoogleCalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
