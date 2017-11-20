import { Injectable } from '@angular/core';
import { Worker} from './worker';


@Injectable()
export class WorkerService {

  workers: Worker[];

  constructor() {
    this.workers = [
      {
        id: 1,
        name: 'jan janssen',
        role: 'schoonmaker',
        dateFrom: new Date(2017, 1)
      },
      {
        id: 2,
        name: 'Karel karelssen',
        role: 'receptionist',
        dateFrom: new Date(2017, 5)
      },
      {
        id: 3,
        name: 'Piet Pieterssen',
        role: 'Kok',
        dateFrom: new Date(2017, 10)
      }
    ];
   }



}
