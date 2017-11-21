import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { WorkerService } from '../worker.service';



@Component({
  selector: 'app-edit-worker',
  templateUrl: './edit-worker.component.html',
  styleUrls: ['./edit-worker.component.css']
})
export class EditWorkerComponent implements OnInit {

  id: number;
  inputName: string;
  inputRole: string;
  inputStartDate: Date;

  index: number;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private workerService: WorkerService
  ) { }

  ngOnInit() {
    this.getWorker();
  }

  getWorker(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    let worker = this.workerService.getWorker(id);
    this.index = this.workerService.workers.indexOf(worker);
    this.id = worker.id;
    this.inputName = worker.first_name;
    this.inputRole = worker.role;
    this.inputStartDate = worker.dateFrom;
  }

  submit(): void {
    this.workerService.workers[this.index] = {
        id : this.id,
        first_name: this.inputName,
        last_name: '',
        avatar: '',
        role: this.inputRole,
        dateFrom: this.inputStartDate
      };
      console.log('added');
      console.log(this.workerService.workers);
  }

  delete(): void {
    this.workerService.workers.splice(this.index, 1);
    console.log(this.workerService.workers);
  }
}
