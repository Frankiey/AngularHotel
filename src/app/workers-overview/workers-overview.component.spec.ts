import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkersOverviewComponent } from './workers-overview.component';
import { FormsModule } from '@angular/forms';
import { WorkerService } from '../worker.service';
import { Router } from '@angular/router';
import { RoleService } from '../role.service';

describe('WorkersOverviewComponent', () => {
  let component: WorkersOverviewComponent;
  let fixture: ComponentFixture<WorkersOverviewComponent>;

  beforeEach(async(() => {

    let WorkerServiceStub = {};

    let RouterStub = {};

    let HttpClientStub = {};

    let HttpHandlerStub = {};

    let roleStub = {};

    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [ WorkersOverviewComponent ],
      providers: [
        {provide: Router, useValue: RouterStub },
        {provide: WorkerService, useValue: WorkerServiceStub },
        { provide: RoleService, useValue: roleStub}
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
