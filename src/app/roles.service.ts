import { Injectable } from '@angular/core';

@Injectable()
export class RolesService {

  roles: string[];
  
    constructor() {
      this.roles = [
        'Receptionist',
        'Chef kok',
        'kok',
        'serveerder',
        'manager',
        'assistent manager',
        'schoonmaker'
      ];
     }
}