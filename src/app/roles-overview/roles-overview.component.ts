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
  succesMsg: boolean;

  roles: RoleList;

  constructor(
    private route: ActivatedRoute,
    private roleService: RoleService,
    private router: Router
  ) { }

  ngOnInit() {
    this.roleService.getRoles().subscribe( x => {
      this.roles = x;
    });
  }

  getRole(id : number): void {
    this.roleService.getRole(id).subscribe(x => {
      this.fillFields(x);
    });
  }

  fillFields(role: Role): void {

    this.id = role.id;
    this.name = role.name;

    console.log('fields filled');
  }

  delete(): void {
    this.roleService.deleteRole(this.id).subscribe(x => {
      console.log('Deleted');
    });
  }

  redirectTo(id: number) {
    this.router.navigateByUrl('editrole/' + id);
  }
  
  submit(): void {

    let role: Role = {
      id : 0,
      name : this.name
    };

    this.roleService.addRole(role).subscribe(x => this.succesMsg = true );
  }

}
