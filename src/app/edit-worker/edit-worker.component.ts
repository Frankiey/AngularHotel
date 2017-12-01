import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { WorkerService } from '../worker.service';
import { Worker } from '../worker';
import { UserList, SingleUser, User, WorkerPut} from '../Api-types';


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
  inputStartDate: string;
  inputEmail: string;
  //inputAvatar: string;

  deleted = false;
  index: number;

  successDelete: boolean;
  successEdit: boolean;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private workerService: WorkerService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getWorker();
  }

  getWorker(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.workerService.getWorker(id).subscribe(x => {
      this.fillFields(x);
    });
  }

  fillFields(user: User): void {
    // this.index = this.workerService.workers.indexOf(worker);
    this.id = user.id;
    this.inputFirstName = user.firstName;
    this.inputLastName = user.lastName;
    this.inputRole = user.firstName;
    this.inputStartDate = user.startDate.join('-');

    console.log('fields filled');
  }

  submit(): void {
    if (this.deleted) {
     return;
    }
    let splitDate: string[] = this.inputStartDate.split('-');

    let worker: WorkerPut = {
      id: this.id,
      firstName: this.inputFirstName,
      lastName: this.inputLastName,
      email: 'd@d.com',
      startDate: [Number(splitDate[0]), Number(splitDate[1].valueOf()), Number(splitDate[2])]
    };

    this.workerService.updateWorker(worker).subscribe(x =>  {
      this.successEdit = true;
    });
  }

  delete(): void {
    this.workerService.deleteWorker(this.id).subscribe(x => {
      this.successDelete = true;
      console.log('Deleted');
      this.deleted = true;
    });
  }

  redirectTo() {
    this.router.navigateByUrl('/overview');
    console.log('redirected');
  }
}
