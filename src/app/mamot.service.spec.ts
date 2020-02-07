import { TestBed } from '@angular/core/testing';

import { MamotService } from './mamot.service';

describe('MamotService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MamotService = TestBed.get(MamotService);
    expect(service).toBeTruthy();
  });
});
