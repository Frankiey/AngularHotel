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

  currentPage: number = 1;
  maximumPages: number;

  searchFirstName: string;
  searchLastName: string;
  searchEmail: string;
  searchRole: string;
  searchDate: number[];

  workers: Worker[];

  constructor(public workerService: WorkerService, private router: Router) {
   }

  ngOnInit() {
    console.log('overview Initied');
    this.workerService.getWorkers().subscribe(x => {
      // Todo check any
      let userList: UserList =  x as UserList;
      let users: User[] = userList.content;
      let workers2: Worker[] = users as Worker[];

      this.workers = workers2;
      console.log('Message received');
      console.log(workers2);
      this.maximumPages = x.totalPages;
      this.pagesArray = new Array(x.totalPages);
    });
  }

  search(): void {
    let worker = {id: -1, firstName: this.searchFirstName, lastName: this.searchLastName, email: this.searchEmail, role: this.searchRole, startDate: this.searchDate, roleId: 1}
    this.workerService.searchWorkers(worker).subscribe(x => {
      console.log("Search result: " + x);
      this.workers = x as Worker[];

    });
  }


  pageClick(page: number): void {
    this.currentPage = page;
    this.workerService.getWorkers(page).subscribe(x => {
      let userList: UserList =  x as UserList;
      let users: User[] = userList.content;
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
