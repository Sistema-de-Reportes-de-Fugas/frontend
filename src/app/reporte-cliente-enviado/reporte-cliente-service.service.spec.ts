import { TestBed } from '@angular/core/testing';

import { ReporteClienteServiceService } from './reporte-cliente-service.service';

describe('ReporteClienteServiceService', () => {
  let service: ReporteClienteServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReporteClienteServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
