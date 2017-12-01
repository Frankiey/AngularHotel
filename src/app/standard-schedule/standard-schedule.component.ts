import { Component, OnInit } from '@angular/core';
import { StandardSchedule } from '../Api-types';
import { WorkerService } from '../worker.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-standard-schedule',
  templateUrl: './standard-schedule.component.html',
  styleUrls: ['./standard-schedule.component.css']
})
export class StandardScheduleComponent implements OnInit {

  public updateMsg = '';
  public schedule: StandardSchedule = {
    id: 1,
    monday: {
      morning: true,
      afternoon: true,
      evening: true,
      night: true
    },
    tuesday: {
      morning: true,
      afternoon: true,
      evening: true,
      night: true
    },
    wednesday: {
      morning: true,
      afternoon: true,
      evening: true,
      night: true
    },
    thursday: {
      morning: true,
      afternoon: true,
      evening: true,
      night: true
    },
    friday: {
      morning: true,
      afternoon: true,
      evening: true,
      night: true
    },
    saturday: {
      morning: true,
      afternoon: true,
      evening: true,
      night: true
    },
    sunday: {
      morning: true,
      afternoon: true,
      evening: true,
      night: true
    }
  };
  workerId: number;

  constructor(
    private workerService: WorkerService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.loadSchedule();

  }

  loadSchedule(): void {
    const id = +this.route.snapshot.paramMap.get('id');

      this.workerService.getStandardSchedule(id).subscribe( x => {
          this.schedule = x;
      });
  }

  submit(): void {
    this.workerService.updateStandardSchedule(this.schedule).subscribe( x => {
      this.showUpdateMessage();
    });
  }

  showUpdateMessage(): void {
    this.updateMsg += 'Het rooster is opgeslagen!';
  }

}
