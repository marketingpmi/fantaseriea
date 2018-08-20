import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WgPartiteGiornataComponent } from './wg-partite-giornata.component';

describe('WgPartiteGiornataComponent', () => {
  let component: WgPartiteGiornataComponent;
  let fixture: ComponentFixture<WgPartiteGiornataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WgPartiteGiornataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WgPartiteGiornataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
