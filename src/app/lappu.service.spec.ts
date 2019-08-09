import { TestBed } from '@angular/core/testing';

import { LappuService } from './lappu.service';

describe('LappuService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LappuService = TestBed.get(LappuService);
    expect(service).toBeTruthy();
  });
});
