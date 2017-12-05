import { Component, OnInit } from '@angular/core';
import { ScheduleService } from '../schedule.service';
import { ScheduleEntry } from '../Api-types';

@Component({
  selector: 'app-daily-schedule',
  templateUrl: './daily-schedule.component.html',
  styleUrls: ['./daily-schedule.component.css']
})
export class DailyScheduleComponent implements OnInit {

  date: number[] = [2017, 11, 11];
  public schedule: ScheduleEntry[];
  public scheduleDate: string;

  constructor(private scheduleService: ScheduleService) { }

  ngOnInit() {

  }

  submit(): void {
    this.scheduleService.updateSchedule(this.scheduleDate, this.schedule).subscribe( x => {
      console.log('Updated the schedule');
    });
  }

  getSchedule(): void {
    this.scheduleService.getSchedule(this.scheduleDate).subscribe( x => {
       this.schedule = x as ScheduleEntry[];
       console.log(this.schedule);
    });
  }

}
