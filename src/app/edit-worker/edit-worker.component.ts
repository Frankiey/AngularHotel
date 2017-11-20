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

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private workerService: WorkerService
  ) { }

  ngOnInit() {
    this.getWorker();
  }

  getWorker(): void{
    const id = +this.route.snapshot.paramMap.get('id');
    let worker = this.workerService.getWorker(id);
    this.id = worker.id;
    this.inputName = worker.name;
    this.inputRole = worker.role;
    this.inputStartDate = worker.dateFrom;
  }

  

}
