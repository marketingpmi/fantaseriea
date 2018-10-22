import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertDayComponent } from './insert-day.component';

describe('InsertDayComponent', () => {
  let component: InsertDayComponent;
  let fixture: ComponentFixture<InsertDayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertDayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
