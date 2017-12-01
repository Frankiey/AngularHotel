import { Component, OnInit } from '@angular/core';
import { WorkerService } from '../worker.service';
import { Router } from '@angular/router';
import { RoleService } from '../role.service';

@Component({
  selector: 'app-edit-roles',
  templateUrl: './edit-roles.component.html',
  styleUrls: ['./edit-roles.component.css']
})
export class EditRolesComponent implements OnInit {
  
  constructor(public roleService: RoleService, private router: Router) {
  }

  ngOnInit() {
    console.log('edit roles Inited');
    
  }
  
  filter(): void {
    
  }
  
  filterWorkers(): void {

  }
  
  redirectTo(id: number) {
  }
  
}
