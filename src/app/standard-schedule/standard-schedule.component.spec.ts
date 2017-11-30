import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardScheduleComponent } from './standard-schedule.component';

describe('StandardScheduleComponent', () => {
  let component: StandardScheduleComponent;
  let fixture: ComponentFixture<StandardScheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StandardScheduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StandardScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
