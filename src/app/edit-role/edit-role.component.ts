import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RoleService } from '../role.service';

import { Location } from '@angular/common';
import { Role } from '../Api-types';

@Component({
  selector: 'app-edit-role',
  templateUrl: './edit-role.component.html',
  styleUrls: ['./edit-role.component.css']
})
export class EditRoleComponent implements OnInit {

  id: number = 0;
  name: string;

  deleted = false;
  index: number;

  successDelete: boolean;
  successEdit: boolean;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private roleService: RoleService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getRole(Number(this.route.snapshot.paramMap.get('id')));
  }

  getRole(id : number): void {
    this.roleService.getRole(id).subscribe(x => {
      this.id = x.id;
      this.name = x.name;
    });
  }

  submit(): void {
    if (this.deleted) {
      return;
    }
    let role: Role = {
      id: this.id,
      name: this.name,
    };

    this.roleService.updateRole(role).subscribe(x => {
      this.successEdit = true;
    });
  }

  delete(): void {
    this.roleService.deleteRole(this.id).subscribe(x => {
      this.successDelete = true;
      this.deleted = true;
    });
  }

  redirectTo() {
    this.router.navigateByUrl('/roles');
  }

}
