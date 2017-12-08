import { Component, OnInit } from '@angular/core';
import { ScheduleService } from '../schedule.service';
import { HoursEntry } from '../Api-types';

@Component({
  selector: 'app-hours-overview',
  templateUrl: './hours-overview.component.html',
  styleUrls: ['./hours-overview.component.css']
})
export class HoursOverviewComponent implements OnInit {

  constructor(private scheduleService: ScheduleService) { }

  hours: HoursEntry[];

  ngOnInit() {
    this.scheduleService.getHoursOverview(2017, 1).subscribe(x => {
      this.hours = x;
      console.log(this.hours);
    });
  }

}
