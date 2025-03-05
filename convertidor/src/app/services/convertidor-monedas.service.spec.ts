import { TestBed } from '@angular/core/testing';

import { ConvertidorMonedasService } from './convertidor-monedas.service';

describe('ConvertidorMonedasService', () => {
  let service: ConvertidorMonedasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConvertidorMonedasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
