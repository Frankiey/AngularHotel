import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { WorkerService } from '../worker.service';
import { Worker } from '../worker';
import { UserList, SingleUser, User} from '../Api-types';


@Component({
  selector: 'app-edit-worker',
  templateUrl: './edit-worker.component.html',
  styleUrls: ['./edit-worker.component.css']
})
export class EditWorkerComponent implements OnInit {

  id: number = 0;
  inputFirstName: string;
  inputLastName: string;
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
    this.workerService.getWorker(id).subscribe(x => {
      let user: User = x.data;
      this.fillFields(user);
    });


  }

  fillFields(user: User) {
    // this.index = this.workerService.workers.indexOf(worker);
    this.id = user.id;
    this.inputFirstName = user.first_name;
    this.inputLastName = user.last_name;
    this.inputRole = 'schoonmaker';
    this.inputStartDate = undefined;
  }

  submit(): void {
    let worker: Worker = {
      id: this.id,
      first_name: this.inputFirstName,
      last_name: this.inputLastName,
      avatar: '',
      role: this.inputRole,
      dateFrom: this.inputStartDate
    };

    this.workerService.updateWorker(worker).subscribe(x => {
      console.log(x);
    });
  }

  delete(): void {
    this.workerService.deleteWorker(this.id).subscribe(x => {
      console.log('Deleted');
    });
  }
}
