import { Component, OnInit } from '@angular/core';
import { WorkersOverviewComponent } from '../workers-overview/workers-overview.component';
import { WorkerService } from '../worker.service';
import { Router } from '@angular/router';
import { RoleService } from '../role.service';
import { race } from 'q';
import { Role, RoleList, Worker } from '../Api-types';

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
  inputStartDate: string;
  inputEmail: string;

  roles: Role[];

  succesMsg: boolean;

  constructor(private roleService: RoleService, private workerService: WorkerService, private router: Router) { }

  ngOnInit() {

    this.roleService.getRoles().subscribe(x => this.roles = x.content);

  }

  submit(): void {
    let splitDate: string[] = this.inputStartDate.split('-');

    let worker = {id: 0, firstName: this.inputFirstName, lastName: this.inputLastName, email: this.inputEmail, roleId: Number(this.inputRole), role: '', startDate: new Date(this.inputStartDate).valueOf()};

    this.workerService.addWorker(worker).subscribe(x => this.succesMsg = true);
  }

  redirectTo() {
    this.router.navigateByUrl('/overview');
  }
}

