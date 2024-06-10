import { TestBed } from '@angular/core/testing';

import { BuscarTemasService } from './buscar-temas.service';

describe('BuscarTemasService', () => {
  let service: BuscarTemasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BuscarTemasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
