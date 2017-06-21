import { TestBed, inject } from '@angular/core/testing';

import { MovieListServiceService } from './movie-list-service.service';

describe('MovieListServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MovieListServiceService]
    });
  });

  it('should be created', inject([MovieListServiceService], (service: MovieListServiceService) => {
    expect(service).toBeTruthy();
  }));
});
