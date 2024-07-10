import { TestBed } from '@angular/core/testing';

import { UserdeactivateGuard } from './userdeactivate.guard';

describe('UserdeactivateGuard', () => {
  let guard: UserdeactivateGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(UserdeactivateGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
