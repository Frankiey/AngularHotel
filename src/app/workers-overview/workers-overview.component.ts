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

  workersDisplay;
  workersTest: Worker[];

  constructor(private workerService: WorkerService) {
    this.workersDisplay = workerService.workers;
   }

  ngOnInit() {
    console.log('overview Initied');
    this.workerService.getWorkers().subscribe(x => this.workersTest = x);
    console.log(this.workersTest);
  }

  filter(): void {
    this.workersDisplay = this.workerService.workers;
    console.log('filtered');
    this.workersDisplay = this.workersDisplay.filter(worker => worker.name.includes(this.inputName));
  }

}
