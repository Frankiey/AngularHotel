import { Component, OnInit } from '@angular/core';
import { WorkerService } from '../worker.service';
import { Router, ActivatedRoute } from '@angular/router';
import { RoleService } from '../role.service';
import { Role, RoleList } from '../Api-types';
import { Location } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-overview-roles',
  templateUrl: './roles-overview.component.html',
  styleUrls: ['./roles-overview.component.css']
})
export class RolesOverviewComponent implements OnInit {
  
  id: number = 0;
  name: string;

  roles: RoleList;

  constructor(
    private route: ActivatedRoute,
    //private location: Location,
    private roleService: RoleService,
    private router: Router
  ) { }

  ngOnInit() {
    this.roleService.getRoles().subscribe( x => {
      this.roles = x;
    });
  }

  getRole(id : number): void {
    //const id = +this.route.snapshot.paramMap.get('id');
    this.roleService.getRole(id).subscribe(x => {
      this.fillFields(x);
    });
  }

  fillFields(role: Role): void {
    // this.index = this.workerService.workers.indexOf(worker);
    this.id = role.id;
    this.name = role.name;

    console.log('fields filled');
  }

  submit(): void {

    let role: Role = {
      id: this.id,
      name: this.name,
    };

    this.roleService.updateRole(role).subscribe(x =>  {
      //
    });
  }

  delete(): void {
    this.roleService.deleteRole(this.id).subscribe(x => {
      console.log('Deleted');
    });
  }

  redirectTo(id: number) {
    //console.log(this.location.path());
    this.router.navigateByUrl('editrole/' + id);
    console.log('redirected');
  }

}
