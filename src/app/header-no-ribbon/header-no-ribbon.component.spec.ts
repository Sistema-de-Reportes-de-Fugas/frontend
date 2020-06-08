import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderNoRibbonComponent } from './header-no-ribbon.component';

describe('HeaderNoRibbonComponent', () => {
  let component: HeaderNoRibbonComponent;
  let fixture: ComponentFixture<HeaderNoRibbonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderNoRibbonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderNoRibbonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
