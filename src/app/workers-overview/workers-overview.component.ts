import { Component, OnInit } from '@angular/core';
import { Worker } from '../worker';

@Component({
  selector: 'app-workers-overview',
  templateUrl: './workers-overview.component.html',
  styleUrls: ['./workers-overview.component.css']
})
export class WorkersOverviewComponent implements OnInit {

  static workers: Worker[] = [
    {
      id: 1,
      name: 'jan janssen',
      role: 'schoonmaker',
      dateFrom: new Date(2017, 1)
    },
    {
      id: 2,
      name: 'Karel karelssen',
      role: 'receptionist',
      dateFrom: new Date(2017, 5)
    },
    {
      id: 3,
      name: 'Piet Pieterssen',
      role: 'Kok',
      dateFrom: new Date(2017, 10)
    }
  ];

  inputName: string;

  workersDisplay = WorkersOverviewComponent.workers;

  constructor() { }

  ngOnInit() {
    console.log('overview Initied');
  }

  filter(): void {
    console.log(WorkersOverviewComponent.workers);
    this.workersDisplay = WorkersOverviewComponent.workers;
    console.log('filtered');
    this.workersDisplay = this.workersDisplay.filter(worker => worker.name.includes(this.inputName));
  }

}
