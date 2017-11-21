import { Injectable } from '@angular/core';
import { Worker} from './worker';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class WorkerService {
  private reqResUrl = 'https://reqres.in/api/';

  workers: Worker[];

  constructor(private http: HttpClient) {
    this.workers = [
      {
        id: 1,
        name: 'Jan Janssen',
        role: 'schoonmaker',
        dateFrom: new Date(2017, 1)
      },
      {
        id: 2,
        name: 'Karel Karelssen',
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

getWorker(id: number): Worker {
  return this.workers.find( x => x.id === id);
}

getWorkers(): Observable<Worker[]> {

  return this.http.get<Worker[]>(this.reqResUrl + 'users')
  .pipe(
    tap(_ => console.log(_)),
    catchError(this.handleError('getWorkers', []))
  );
}

private handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    console.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };

}
