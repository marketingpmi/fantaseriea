import { TestBed, inject } from '@angular/core/testing';

import { GiornateService } from './giornate.service';

describe('GiornateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GiornateService]
    });
  });

  it('should be created', inject([GiornateService], (service: GiornateService) => {
    expect(service).toBeTruthy();
  }));
});
