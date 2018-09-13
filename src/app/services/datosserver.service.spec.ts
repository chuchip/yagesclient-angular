import { TestBed, inject } from '@angular/core/testing';

import { DatosserverService } from './datosserver.service';

describe('DatosserverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DatosserverService]
    });
  });

  it('should be created', inject([DatosserverService], (service: DatosserverService) => {
    expect(service).toBeTruthy();
  }));
});
