import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { AddWorkerComponent } from './add-worker.component';
import { WorkerService } from '../worker.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RoleService } from '../role.service';

describe('AddWorkerComponent', () => {
  let component: AddWorkerComponent;
  let fixture: ComponentFixture<AddWorkerComponent>;

  beforeEach(async(() => {
    let WorkerServiceStub = {
    };

    let RouterStub = {
    };
    let RoleStub = {};

    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ AddWorkerComponent ],
      providers: [
        {provide: WorkerService, useValue: WorkerServiceStub },
        {provide: Router, useValue: RouterStub },
        {provide: RoleService, useValue: RoleStub }
       ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddWorkerComponent);
    component = fixture.componentInstance;
    //fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
