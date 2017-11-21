import { Component, OnInit } from '@angular/core';
import { WorkersOverviewComponent } from '../workers-overview/workers-overview.component';
import { WorkerService } from '../worker.service';
import { Worker } from '../worker';

@Component({
  selector: 'app-add-worker',
  templateUrl: './add-worker.component.html',
  styleUrls: ['./add-worker.component.css']
})
export class AddWorkerComponent implements OnInit {
  id: number;
  inputFirstName: string;
  inputLastName: string;
  inputRole: string;
  inputStartDate: Date;

  

  constructor(private workerService: WorkerService) { }

  ngOnInit() {
  }

  submit(): void {
   let worker: Worker = {
        id : this.id,
        first_name: this.inputFirstName,
        last_name: this.inputLastName,
        avatar: '',
        role: this.inputRole,
        dateFrom: this.inputStartDate
      };
      console.log('add created');
      this.workerService.addWorker(worker).subscribe(x => console.log(`added ${worker.first_name} ${worker.last_name} successfully`));
  }
}

