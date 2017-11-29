import { Component, OnInit } from '@angular/core';
import { Worker } from '../worker';
import { WorkerService } from '../worker.service';
import { UserList, User } from '../Api-types';
import { Router } from '@angular/router';

@Component({
  selector: 'app-workers-overview',
  templateUrl: './workers-overview.component.html',
  styleUrls: ['./workers-overview.component.css']
})
export class WorkersOverviewComponent implements OnInit {
  pagesArray: any[];

  inputName: string;

  currentPage: number = 1;
  maximumPages: number;

  workers: Worker[];

  constructor(public workerService: WorkerService, private router: Router) {
   }

  ngOnInit() {
    console.log('overview Initied');
    this.workerService.getWorkers().subscribe(x => {
      // Todo check any
      let userList: UserList =  x as UserList;
      let users: User[] = userList.data;
      let workers2: Worker[] = users as Worker[];

      this.workers = workers2;
      console.log('Message received');
      console.log(workers2);
      this.maximumPages = x.total_pages;
      this.pagesArray = new Array(x.total_pages);
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


  pageClick(page: number): void {
    this.currentPage = page;
    this.workerService.getWorkers(page).subscribe(x => {
      let userList: UserList =  x as UserList;
      let users: User[] = userList.data;
      let workers2: Worker[] = users as Worker[];

      this.workers = workers2;
    });
  }

  redirectTo(id: number) {
    this.router.navigateByUrl('editworker/' + id);
    console.log(id);
  }

  easterEgg(id: number, avatarLink: string): string {
    if (id === 8) {
      return 'https://scontent-ort2-1.cdninstagram.com/t51.2885-19/s150x150/13117943_467541320111038_278117930_a.jpg';
    } else if (id === 9) {
      return 'https://thumbs.gfycat.com/IndelibleAliveAmericancrow-max-1mb.gif';
    }
    return avatarLink;
  }
}
