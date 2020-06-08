import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteAdminComponent } from './reporte-admin.component';

describe('ReporteAdminComponent', () => {
  let component: ReporteAdminComponent;
  let fixture: ComponentFixture<ReporteAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReporteAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporteAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
