import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteClienteEnviadoComponent } from './reporte-cliente-enviado.component';

describe('ReporteClienteEnviadoComponent', () => {
  let component: ReporteClienteEnviadoComponent;
  let fixture: ComponentFixture<ReporteClienteEnviadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReporteClienteEnviadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporteClienteEnviadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
