import { TestBed } from '@angular/core/testing';

import { ReportesActivosService } from './reportes-activos.service';

describe('ReportesActivosService', () => {
  let service: ReportesActivosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReportesActivosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
