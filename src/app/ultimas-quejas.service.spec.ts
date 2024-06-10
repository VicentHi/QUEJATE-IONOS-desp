import { TestBed } from '@angular/core/testing';

import { UltimasQuejasService } from './ultimas-quejas.service';

describe('UltimasQuejasService', () => {
  let service: UltimasQuejasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UltimasQuejasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
