import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { WorkerService } from '../worker.service';
import { Worker } from '../worker';
import { UserList, SingleUser, User} from '../Api-types';
import { FormsModule } from '@angular/forms';

import { EditWorkerComponent } from './edit-worker.component';



describe('EditWorkerComponent', () => {
  let component: EditWorkerComponent;
  let fixture: ComponentFixture<EditWorkerComponent>;

  beforeEach(async(() => {
    let activatedRouteStub = {
      isLoggedIn: true,
      user: { name: 'Test User'}
    };
    let locationStub = {
    };

    let workerServiceStub = {
    };


    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [ EditWorkerComponent ],
      providers:  [
        {provide: ActivatedRoute, useValue: activatedRouteStub },
        {provide: WorkerService, userValue: workerServiceStub},
        {provide: Location, useValue: locationStub}
       ]
    });
    //.compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditWorkerComponent);
    component = fixture.componentInstance;
   // fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    //expect(component).toBeTruthy();
  });

  it('should show ID 1', () => {
    //expect(true).toBeTruthy();
    expect(component.id).toBe(0);
  });
});
