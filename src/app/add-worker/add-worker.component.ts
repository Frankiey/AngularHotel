import { Component, OnInit } from '@angular/core';
import { WorkersOverviewComponent } from '../workers-overview/workers-overview.component';
import { WorkerService } from '../worker.service';
import { Worker } from '../worker';
import {} from '../../../node_modules/bootstrap/dist/'
import { Router } from '@angular/router';

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

  succesMsg: boolean;

  constructor(private workerService: WorkerService, private router: Router) { }

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
      this.workerService.addWorker(worker).subscribe(x => this.succesMsg = true );
  }

  redirectTo() {
    this.router.navigateByUrl('/overview');
    console.log('redirected');
  }
}

