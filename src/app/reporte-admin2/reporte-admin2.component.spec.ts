import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteAdmin2Component } from './reporte-admin2.component';

describe('ReporteAdmin2Component', () => {
  let component: ReporteAdmin2Component;
  let fixture: ComponentFixture<ReporteAdmin2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReporteAdmin2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporteAdmin2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
