import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyScheduleComponent } from './daily-schedule.component';
import { FormsModule } from '@angular/forms';
import { DateFromNumber } from '../date-from-number-pipe';
import { ScheduleService } from '../schedule.service';

describe('DailyScheduleComponent', () => {
  let component: DailyScheduleComponent;
  let fixture: ComponentFixture<DailyScheduleComponent>;

  beforeEach(async(() => {
    let scheduleStub = {};
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ DailyScheduleComponent, DateFromNumber ],
      providers: [
        {provide: ScheduleService, useValue: scheduleStub  }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyScheduleComponent);
    component = fixture.componentInstance;
    //fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
