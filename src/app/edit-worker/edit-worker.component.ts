import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { WorkerService } from '../worker.service';
import { UserList, Worker, WorkerPut } from '../Api-types';
import { RoleService } from '../role.service';
import { Role } from '../Role';


@Component({
  selector: 'app-edit-worker',
  templateUrl: './edit-worker.component.html',
  styleUrls: ['./edit-worker.component.css']
})
export class EditWorkerComponent implements OnInit {

  worker: Worker;

  id: number = 0;
  inputFirstName: string;
  inputLastName: string;
  inputRole: number;
  inputStartDate: string;
  inputEmail: string;

  deleted = false;
  index: number;

  successDelete: boolean;
  successEdit: boolean;

  roles: Role[];

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private workerService: WorkerService,
    private roleService: RoleService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getWorker();
    this.roleService.getRoles().subscribe(x => this.roles = x.content);
  }

  getWorker(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.workerService.getWorker(id).subscribe(w => {
      this.worker = w;
      this.fillFields(w);
    });
  }

  fillFields(user: Worker): void {
    this.id = user.id;
    this.inputFirstName = user.firstName;
    this.inputLastName = user.lastName;
    this.inputRole = user.roleId;
    this.inputStartDate = new Date(user.startDate * 1000).toLocaleDateString("nl");
  }

  submit(): void {
    if (this.deleted) {
      return;
    }

    let worker: WorkerPut = {
      id: this.worker.id,
      firstName: this.inputFirstName,
      lastName: this.inputLastName,
      roleId: this.inputRole,
      email: 'd@d.com',
      startDate: this.worker.startDate
    };

    this.workerService.updateWorker(worker).subscribe(x => {
      this.successEdit = true;
    });
  }

  delete(): void {
    this.workerService.deleteWorker(this.id).subscribe(x => {
      this.successDelete = true;
      this.deleted = true;
    });
  }

  redirectTo() {
    this.router.navigateByUrl('/overview');
  }
}
