import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { StandardScheduleComponent } from './standard-schedule.component';
import { WorkerService } from '../worker.service';
import { ActivatedRoute } from '@angular/router';

describe('StandardScheduleComponent', () => {
  let component: StandardScheduleComponent;
  let fixture: ComponentFixture<StandardScheduleComponent>;

  beforeEach(async(() => {
    let workerStub = {};
    let activatedRoutStub = {};
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ StandardScheduleComponent ],
      providers: [
        {provide: WorkerService, useValue: workerStub },
        {provide: ActivatedRoute, useValue: activatedRoutStub}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StandardScheduleComponent);
    component = fixture.componentInstance;
    //fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
