import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WgClassificaComponent } from './wg-classifica.component';

describe('WgClassificaComponent', () => {
  let component: WgClassificaComponent;
  let fixture: ComponentFixture<WgClassificaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WgClassificaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WgClassificaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
