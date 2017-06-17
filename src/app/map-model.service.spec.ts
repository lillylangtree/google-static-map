import { TestBed, inject } from '@angular/core/testing';

import { MapModelService } from './map-model.service';

describe('MapModelService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MapModelService]
    });
  });

  it('should be created', inject([MapModelService], (service: MapModelService) => {
    expect(service).toBeTruthy();
  }));
});
