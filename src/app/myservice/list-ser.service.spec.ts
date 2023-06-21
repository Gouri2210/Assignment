import { TestBed } from '@angular/core/testing';

import { ListSerService } from './list-ser.service';

describe('ListSerService', () => {
  let service: ListSerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListSerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
