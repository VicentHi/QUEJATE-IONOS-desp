import { TestBed } from '@angular/core/testing';

import { UserRegistradoService } from './user-registrado.service';

describe('UserRegistradoService', () => {
  let service: UserRegistradoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserRegistradoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
