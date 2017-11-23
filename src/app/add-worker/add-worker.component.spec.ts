import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWorkerComponent } from './add-worker.component';
import { WorkerService } from '../worker.service';
import { Router } from '@angular/router';

describe('AddWorkerComponent', () => {
  let component: AddWorkerComponent;
  let fixture: ComponentFixture<AddWorkerComponent>;

  beforeEach(async(() => {
    let WorkerServiceStub = {
    };

    let RouterStub = {
    };

    TestBed.configureTestingModule({
      declarations: [ AddWorkerComponent ],
      providers: [
        {provide: WorkerService, useValue: WorkerServiceStub },
        {provide: Router, useValue: RouterStub }
       ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddWorkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
