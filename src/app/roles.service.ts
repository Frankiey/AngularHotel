import { Injectable } from '@angular/core';
import { Roles } from './roles';

@Injectable()
export class RolsService {

  roles: Roles[];
  
    constructor() {
      this.roles = [
        {role: 'Receptionist'},
        {role: 'Chef kok'},
        {role: 'kok'},
        {role: 'serveerder'},
        {role: 'manager'},
        {role: 'assistent manager'},
        {role: 'schoonmaker'}
      ];
     }
}