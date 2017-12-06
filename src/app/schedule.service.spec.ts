import { TestBed, inject } from '@angular/core/testing';

import { ScheduleService } from './schedule.service';
import { HttpClient } from '@angular/common/http';

describe('ScheduleService', () => {
  beforeEach(() => {
    let httpStub = {};

    TestBed.configureTestingModule({
      providers: [ScheduleService,
      {provide: HttpClient, useValue: httpStub}]
    });
  });

  it('should be created', inject([ScheduleService], (service: ScheduleService) => {
    expect(service).toBeTruthy();
  }));
});
