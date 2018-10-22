import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiornataFormComponent } from './giornata-form.component';

describe('GiornataFormComponent', () => {
  let component: GiornataFormComponent;
  let fixture: ComponentFixture<GiornataFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiornataFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiornataFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
