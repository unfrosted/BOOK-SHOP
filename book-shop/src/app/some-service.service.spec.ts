import { TestBed } from '@angular/core/testing';

import { SomeServiceService } from './some-service.service';

describe('SomeServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SomeServiceService = TestBed.get(SomeServiceService);
    expect(service).toBeTruthy();
  });
});
