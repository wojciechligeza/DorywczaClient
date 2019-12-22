import { TestBed } from '@angular/core/testing';

import { JobOffersService } from './job-offers.service';

describe('JobOffersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JobOffersService = TestBed.get(JobOffersService);
    expect(service).toBeTruthy();
  });
});
