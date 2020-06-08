import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteEnviadoComponent } from './reporte-enviado.component';

describe('ReporteEnviadoComponent', () => {
  let component: ReporteEnviadoComponent;
  let fixture: ComponentFixture<ReporteEnviadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReporteEnviadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporteEnviadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
