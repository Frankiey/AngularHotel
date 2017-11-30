import { Component, OnInit } from '@angular/core';
import { WorkersOverviewComponent } from '../workers-overview/workers-overview.component';
import { WorkerService } from '../worker.service';
import { Worker } from '../worker';
import {} from '../../../node_modules/bootstrap/dist/';
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
      id : 0,
      firstName: this.inputFirstName,
      lastName: this.inputLastName,
      role: this.inputRole,
      startDate: [this.inputStartDate.getFullYear(), this.inputStartDate.getMonth(), this.inputStartDate.getDay()]
    };
      this.workerService.addWorker(worker).subscribe(x => this.succesMsg = true );
  }

  redirectTo() {
    this.router.navigateByUrl('/overview');
    console.log('redirected');
  }
}

