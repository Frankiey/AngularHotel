import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RoleService } from '../role.service';

import { Location } from '@angular/common';

@Component({
  selector: 'app-edit-role',
  templateUrl: './edit-role.component.html',
  styleUrls: ['./edit-role.component.css']
})
export class EditRoleComponent implements OnInit {

  id: number = 0;
  name: string;

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

}
