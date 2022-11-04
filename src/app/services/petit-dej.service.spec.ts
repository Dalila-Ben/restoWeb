import { TestBed } from '@angular/core/testing';

import { PetitDejService } from './petit-dej.service';

describe('PetitDejService', () => {
  let service: PetitDejService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PetitDejService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
