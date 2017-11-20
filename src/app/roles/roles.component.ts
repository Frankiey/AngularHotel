import { Component, OnInit } from '@angular/core';
import { RolesService } from '../roles.service';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {
  
  role: string;
  roles: string[];

  constructor(private rolesService: RolesService) { }

  ngOnInit() {
    this.getRole();
  }

  getRole(): void {
   this.roles = this.rolesService.roles;
  }

  submitRole(): void {
    this.roles.push(this.role);

  }

  deleteRole(role: string): void {
    let index: number = this.roles.indexOf(role);
      this.rolesService.roles.splice(index, 1);
  }
}
