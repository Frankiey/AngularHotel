import { Component, OnInit } from '@angular/core';
import { Worker } from '../worker';
import { WorkerService } from '../worker.service';

@Component({
  selector: 'app-workers-overview',
  templateUrl: './workers-overview.component.html',
  styleUrls: ['./workers-overview.component.css']
})
export class WorkersOverviewComponent implements OnInit {

  inputName: string;

  workers: Worker[];

  constructor(public workerService: WorkerService) {
    // this.workerService.getWorkers();
    // this.workersDisplay = this.workerService.workers;
   }

  ngOnInit() {
    console.log('overview Initied');
    // this.workerService.getWorkers().subscribe(x => x.);
    this.workerService.getWorkers();
  }

  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  filter(): void {
    this.workerService.getWorkers();
    for ( let i = 0; i < 10000; i++) {
      console.log(i);
    }
    console.log('filtered');
    this.workerService.workers = this.workerService.workers.filter(worker => worker.first_name.includes(this.inputName));
    console.log('done filtering');
  }


}
