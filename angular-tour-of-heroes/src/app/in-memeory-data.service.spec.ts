import { TestBed } from '@angular/core/testing';

import { InMemeoryDataService } from './in-memeory-data.service';

describe('InMemeoryDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InMemeoryDataService = TestBed.get(InMemeoryDataService);
    expect(service).toBeTruthy();
  });
});
