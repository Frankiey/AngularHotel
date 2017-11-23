import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkersOverviewComponent } from './workers-overview.component';
import { FormsModule } from '@angular/forms';
import { WorkerService } from '../worker.service';
import { HttpClient } from '@angular/common/http';
import { HttpHandler } from '@angular/common/http';
import { Router } from '@angular/router';

describe('WorkersOverviewComponent', () => {
  let component: WorkersOverviewComponent;
  let fixture: ComponentFixture<WorkersOverviewComponent>;

  beforeEach(async(() => {

    let WorkerServiceStub = {
    };

    let RouterStub = {
    };

    let HttpClientStub = {
    };

    let HttpHandlerStub = {
    };


    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [ WorkersOverviewComponent ],
      providers: [
        {provide: WorkerService, useValue: WorkerServiceStub },
        {provide: HttpClient, useValue: HttpClientStub },
        {provide: HttpHandler, useValue: HttpHandlerStub },
        {provide: Router, useValue: RouterStub }
       ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkersOverviewComponent);
    component = fixture.componentInstance;

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
