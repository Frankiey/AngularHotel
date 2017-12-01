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

  currentPage: number;
  totalPages: number;
  size: number;

  searchFirstName: string;
  searchLastName: string;
  searchEmail: string;
  searchRole: number;
  searchDate: number[];

  workers: Worker[];

  constructor(public workerService: WorkerService, private router: Router) {
  }

  ngOnInit() {
    this.loadTable();
  }

  loadTable(page: number = 0, size: number = 10) {
    this.workerService.getWorkers(page, size).subscribe(data => {
      this.initializeTable(data);
    });
  }

  initializeTable(data: UserList) {
    this.workers = data.content as Worker[];
    this.totalPages = data.totalPages;
    this.currentPage = data.number;
    this.size = data.size;
    this.pagesArray = new Array(data.totalPages);
  }

  paginationClick(size: number) {
    this.loadTable(0, size);
  }

  pageClick(page: number): void {
    this.loadTable(page, this.size);
  }

  search(): void {
    let worker = { id: -1, firstName: this.searchFirstName, lastName: this.searchLastName, email: this.searchEmail, roleId: this.searchRole, startDate: this.searchDate, role: "" }
    this.workerService.searchWorkers(worker, this.size).subscribe(data => {
      this.initializeTable(data);
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
