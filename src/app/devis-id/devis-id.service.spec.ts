import { TestBed, inject } from '@angular/core/testing';

import { DevisIDService } from './devis-id.service';

describe('DevisIDService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DevisIDService]
    });
  });

  it('should be created', inject([DevisIDService], (service: DevisIDService) => {
    expect(service).toBeTruthy();
  }));
});
