import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, OnInit } from '@angular/core';
import { WorkerService } from '../worker.service';
import { Router, ActivatedRoute } from '@angular/router';
import { RoleService } from '../role.service';
import { Location } from '@angular/common';
import { Role } from '../Api-types';
import { EditRolesComponent } from './edit-roles.component';
import { FormsModule } from '@angular/forms';


describe('EditRolesComponent', () => {
  let component: EditRolesComponent;
  let fixture: ComponentFixture<EditRolesComponent>;

  beforeEach(async(() => {
    let activatedRouteStub = {};
    let routerStub = {};
    let roleStub = {};
    let locationStub = {};

    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ EditRolesComponent ],
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
    fixture = TestBed.createComponent(EditRolesComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
