import { Component, OnInit } from '@angular/core';
import { WorkerService } from '../worker.service';
import { UserList, Worker } from '../Api-types';
import { Router } from '@angular/router';
import { RoleService } from '../role.service';
import { Role } from '../Role';

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
  searchRole: string;
  searchDate: number[];

  workers: Worker[];
  roles: Role[];

  constructor(public workerService: WorkerService, public roleService: RoleService, private router: Router) {
  }

  ngOnInit() {
    this.loadTable();
    this.roleService.getRoles().subscribe(x => this.roles = x.content);
  }

  loadTable(page: number = 0, size: number = 10) {
    this.workerService.getWorkers(page, size).subscribe(data => {
      this.initializeTable(data);
    });
  }

  initializeTable(data: UserList) {
    if (data) {
      this.workers = data.content as Worker[];
      this.totalPages = data.totalPages;
      this.currentPage = data.number;
      this.size = data.size;
      this.pagesArray = new Array(data.totalPages);
    } else {
      this.workers = [];
      this.totalPages = 0;
      this.currentPage = 0;
    }
  }

  paginationClick(size: number) {
    this.loadTable(0, size);
  }

  pageClick(page: number): void {
    this.loadTable(page, this.size);
  }

  search(): void {
    console.log(this.searchRole);
    let worker = { id: -1, firstName: this.searchFirstName, lastName: this.searchLastName, email: this.searchEmail, roleId: +this.searchRole, startDate: this.searchDate, role: "" }
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
