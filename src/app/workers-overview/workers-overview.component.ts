import { Component, OnInit } from '@angular/core';
import { Worker } from '../worker';

@Component({
  selector: 'app-workers-overview',
  templateUrl: './workers-overview.component.html',
  styleUrls: ['./workers-overview.component.css']
})
export class WorkersOverviewComponent implements OnInit {

  workers: Worker[] = [
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
  constructor() { }

  ngOnInit() {
  }

}
