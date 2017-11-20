import { Component, OnInit } from '@angular/core';
import { WorkersOverviewComponent } from '../workers-overview/workers-overview.component';

@Component({
  selector: 'app-add-worker',
  templateUrl: './add-worker.component.html',
  styleUrls: ['./add-worker.component.css']
})
export class AddWorkerComponent implements OnInit {
  id: number;
  inputName: string;
  inputRole: string;
  inputStartDate: Date;


  constructor() { }

  ngOnInit() {
  }

  submit(): void {
      WorkersOverviewComponent.workers.push({
        id : this.id,
        name: this.inputName,
        role: this.inputRole,
        dateFrom: this.inputStartDate
      });
      console.log('added');
      console.log(WorkersOverviewComponent.workers);
  }

}
