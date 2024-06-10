import { TestBed } from '@angular/core/testing';

import { InsertQuejaService } from './insert-queja.service';

describe('InsertQuejaService', () => {
  let service: InsertQuejaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InsertQuejaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
