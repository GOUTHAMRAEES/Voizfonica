import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersupComponent } from './customersup.component';

describe('CustomersupComponent', () => {
  let component: CustomersupComponent;
  let fixture: ComponentFixture<CustomersupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomersupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomersupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
