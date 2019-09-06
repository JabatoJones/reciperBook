import { TestBed } from '@angular/core/testing';

import { BuscadorSrvService } from './buscador-srv.service';

describe('BuscadorSrvService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BuscadorSrvService = TestBed.get(BuscadorSrvService);
    expect(service).toBeTruthy();
  });
});
