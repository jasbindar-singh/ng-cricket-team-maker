import { TestBed } from '@angular/core/testing';

import { MatchScheduleService } from './services/match-schedule.service';

describe('MatchScheduleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MatchScheduleService = TestBed.get(MatchScheduleService);
    expect(service).toBeTruthy();
  });
});
