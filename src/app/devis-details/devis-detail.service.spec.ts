import { TestBed, inject } from '@angular/core/testing';

import { DevisDetailService } from './devis-detail.service';

describe('DevisDetailService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DevisDetailService]
    });
  });

  it('should be created', inject([DevisDetailService], (service: DevisDetailService) => {
    expect(service).toBeTruthy();
  }));
});
