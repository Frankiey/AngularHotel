import { Component, OnInit } from '@angular/core';
import { Worker } from '../worker';
import { WorkerService } from '../worker.service';
import { UserList, User } from '../Api-types';

@Component({
  selector: 'app-workers-overview',
  templateUrl: './workers-overview.component.html',
  styleUrls: ['./workers-overview.component.css']
})
export class WorkersOverviewComponent implements OnInit {

  inputName: string;

  workers: Worker[];

  constructor(public workerService: WorkerService) {
    // this.workerService.getWorkers();
    // this.workersDisplay = this.workerService.workers;
   }

  ngOnInit() {
    console.log('overview Initied');
    // this.workerService.getWorkers().subscribe(x => x.);
    this.workerService.getWorkers().subscribe(x => {
      // Todo check any
      let userList: UserList =  x as UserList;
      let users: User[] = userList.data;
      let workers2: Worker[] = users as Worker[];

      this.workers = workers2;
      console.log('Message received');
      console.log(workers2);
    });
  }

  filter(): void {
    this.workerService.getWorkers().subscribe(x => {
      // Todo check any
      let userList: UserList =  x as UserList;
      let users: User[] = userList.data;
      let workers2: Worker[] = users as Worker[];

      this.workers = workers2;
      console.log('Message received');
      console.log(workers2);
      this.filterWorkers();
    });
  }

  filterWorkers(): void {
    console.log('filtered');
    this.workers = this.workers.filter(worker => worker.first_name.includes(this.inputName));
    console.log('done filtering');
  }
}
