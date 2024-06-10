import { TestBed } from '@angular/core/testing';

import { ClientDatosService } from './client-datos.service';

describe('ClientDatosService', () => {
  let service: ClientDatosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientDatosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
