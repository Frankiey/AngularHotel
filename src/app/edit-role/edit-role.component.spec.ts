import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRoleComponent } from './edit-role.component';
import { Router, ActivatedRoute } from '@angular/router';
import { RoleService } from '../role.service';
import { FormsModule } from '@angular/forms';

import { Component, OnInit } from '@angular/core';
import { WorkerService } from '../worker.service';
import { Location } from '@angular/common';
import { Role } from '../Api-types';

describe('EditRoleComponent', () => {
  let component: EditRoleComponent;
  let fixture: ComponentFixture<EditRoleComponent>;

  beforeEach(async(() => {
    let activatedRouteStub = {};
    let routerStub = {};
    let roleStub = {};
    let locationStub = {};

    TestBed.configureTestingModule({
      declarations: [ EditRoleComponent ],
      imports: [FormsModule],
      providers: [
        { provide: Location, useValue: locationStub},
        { provide: ActivatedRoute, useValue: activatedRouteStub },
        { provide: RoleService, userValue: roleStub },
        { provide: Router, useValue: routerStub }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditRoleComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
