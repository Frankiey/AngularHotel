import { Component, OnInit } from '@angular/core';
import { WorkersOverviewComponent } from '../workers-overview/workers-overview.component';
import { WorkerService } from '../worker.service';

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


  constructor(private workerService: WorkerService) { }

  ngOnInit() {
  }

  submit(): void {
    this.workerService.workers.push({
        id : this.id,
        first_name: this.inputName,
        last_name: '',
        avatar: '',
        role: this.inputRole,
        dateFrom: this.inputStartDate
      });
      console.log('added');
      console.log(this.workerService.workers);
  }

}
