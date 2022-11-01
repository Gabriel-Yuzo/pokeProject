import { TestBed } from '@angular/core/testing';

import { PokesCallService } from './pokes-call.service';

describe('PokesCallService', () => {
  let service: PokesCallService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokesCallService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
