import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Observable } from 'rxjs/Observable';
import { WorkerService } from '../worker.service';

import { UserList, Worker } from '../Api-types';
import { FormsModule } from '@angular/forms';
import 'rxjs/add/observable/of';

import { EditWorkerComponent } from './edit-worker.component';
import { RoleService } from '../role.service';

describe('EditWorkerComponent', () => {
  let component: EditWorkerComponent;
  let fixture: ComponentFixture<EditWorkerComponent>;

  beforeEach(async(() => {
      let activatedRouteStub = { isLoggedIn: true, user: { name: "Test User" } };
      let locationStub = {};

      let workerServiceStub = { updateWorker(worker: Worker): Observable<any[] | Worker> {
          return Observable.of([]);
        } };

      let routerStub = {};
      let roleStub = {};

      TestBed.configureTestingModule({
        imports: [FormsModule],
        declarations: [EditWorkerComponent],
        providers: [
          { provide: ActivatedRoute, useValue: activatedRouteStub },
          { provide: WorkerService, userValue: workerServiceStub },
          { provide: Location, useValue: locationStub },
          { provide: Router, useValue: routerStub },
          { provide: RoleService, useValue: roleStub}
        ]
      });
    }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditWorkerComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Input field properties should be undefined or default', () => {
    expect(component.id).toBe(0);
    expect(component.inputFirstName).toBe(undefined);
    expect(component.inputLastName).toBe(undefined);
    expect(component.inputRole).toBe(undefined);
    expect(component.inputStartDate).toBe(undefined);
  });

  it('FillFields should display user values', () => {
    let user: Worker = {
      firstName: 'testFirstName',
      lastName: 'testLastName',
      id: 776677,
      role: 'test',
      roleId: 1,
      email: 'test@test.nl',
      startDate: 11444444
    };
    component.fillFields(user);

    expect(component.id).toBe(776677);
    expect(component.inputFirstName).toBe('testFirstName');
    expect(component.inputLastName).toBe('testLastName');
    expect(component.inputRole).toBe(1);
    expect(component.inputFirstName).toBe('testFirstName');
    expect(component.inputStartDate).toBe('13-5-1970');
  });

  it('Submit should do nothing when deleted', () => {
      component.deleted = true;
      component.submit();
      expect(component.successEdit).toBeFalsy();
  });
});
