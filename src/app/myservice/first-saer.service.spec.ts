import { TestBed } from '@angular/core/testing';

import { FirstSaerService } from './first-saer.service';

describe('FirstSaerService', () => {
  let service: FirstSaerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirstSaerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
