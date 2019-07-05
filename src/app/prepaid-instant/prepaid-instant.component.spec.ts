import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrepaidInstantComponent } from './prepaid-instant.component';

describe('PrepaidInstantComponent', () => {
  let component: PrepaidInstantComponent;
  let fixture: ComponentFixture<PrepaidInstantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrepaidInstantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrepaidInstantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
