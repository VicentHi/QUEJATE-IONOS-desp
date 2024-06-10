import { TestBed } from '@angular/core/testing';

import { ValidaService } from './valida.service';

describe('ValidaService', () => {
  let service: ValidaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValidaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
