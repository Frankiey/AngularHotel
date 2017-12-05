import { Component, OnInit } from '@angular/core';
import { WorkerService } from '../worker.service';
import { Router, ActivatedRoute } from '@angular/router';
import { RoleService } from '../role.service';
import { Role } from '../Api-types';

@Component({
  selector: 'app-edit-roles',
  templateUrl: './edit-roles.component.html',
  styleUrls: ['./edit-roles.component.css']
})
export class EditRolesComponent implements OnInit {
  
  id: number = 0;
  name: string;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private roleService: RoleService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getRole();
  }

  getRole(): void {
    const id = +this.route.snapshot.paramMap.get('id');
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

  redirectTo() {
    this.router.navigateByUrl('/overview');
    console.log('redirected');
  }
  
}
