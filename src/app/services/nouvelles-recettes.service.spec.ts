import { TestBed } from '@angular/core/testing';

import { NouvellesRecettesService } from './nouvelles-recettes.service';

describe('NouvellesRecettesService', () => {
  let service: NouvellesRecettesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NouvellesRecettesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
