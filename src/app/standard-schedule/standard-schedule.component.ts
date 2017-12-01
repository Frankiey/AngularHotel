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
  public schedule: StandardSchedule;
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
          console.log(x);
          this.schedule = x;
          console.log(this.schedule.defaultEntries.FRIDAY);
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
