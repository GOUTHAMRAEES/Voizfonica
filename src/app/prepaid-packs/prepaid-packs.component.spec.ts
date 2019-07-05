import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrepaidPacksComponent } from './prepaid-packs.component';

describe('PrepaidPacksComponent', () => {
  let component: PrepaidPacksComponent;
  let fixture: ComponentFixture<PrepaidPacksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrepaidPacksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrepaidPacksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
