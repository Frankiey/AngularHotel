import { TestBed, inject } from '@angular/core/testing';

import { RoleService } from './role.service';
import { HttpClient } from '@angular/common/http';

describe('RoleService', () => {
  beforeEach(() => {
    let httpStub = {};

    TestBed.configureTestingModule({
      providers: [RoleService,
      {provide: HttpClient, useValue: httpStub}]
    });
  });

  it('should be created', inject([RoleService], (service: RoleService) => {
    expect(service).toBeTruthy();
  }));
});
