import { TestBed, inject } from '@angular/core/testing';

import { WorkerService } from './worker.service';
import { HttpClient } from '@angular/common/http';
import { HttpHandler } from '@angular/common/http';

describe('WorkerService', () => {
  beforeEach(() => {
    let WorkerServiceStub = {
    };

    let HttpClientStub = {
    };

    TestBed.configureTestingModule({
        providers: [
        {provide: WorkerService, useValue: WorkerServiceStub },
        {provide: HttpClient, useValue: HttpClientStub }
       ]
    });
  });

  it('should be created', inject([WorkerService], (service: WorkerService) => {
    expect(service).toBeTruthy();
  }));
});
