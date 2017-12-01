import { Injectable } from '@angular/core';
import { Worker } from './worker';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { UserList, SingleUser, User, StandardSchedule, WorkerPut } from './Api-types';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class WorkerService {
  private reqResUrl = 'http://localhost:8080/api/';

  workers: Worker[];

  constructor(private http: HttpClient) {
  }

  getWorker(id: number): Observable<User> {
    return this.http.get<User>(this.reqResUrl + 'users/' + id).pipe(
      catchError(this.handleError<User>('getWorker'))
    );
  }

  getWorkers(page: number = 1): Observable<UserList> {
    return this.http.get<UserList>(this.reqResUrl + `users`)//?per_page=3&page=${page}`)
      .pipe(
      catchError(this.handleError<UserList>('getWorkers'))
      );
  }

  searchWorkers(worker: Worker) {
    worker.firstName = worker.firstName == "" ? undefined : worker.firstName;
    worker.lastName = worker.lastName == "" ? undefined : worker.lastName;
    worker.email = worker.email == "" ? undefined : worker.email;
    return this.http.post<Worker[]>(this.reqResUrl + `users/search`, worker)//?per_page=3&page=${page}`)
      .pipe(
      catchError(this.handleError<Worker>('searchWorkers'))
      );
  }

  updateWorker(worker: WorkerPut): Observable<any | WorkerPut> {
    return this.http.put<WorkerPut>(this.reqResUrl + 'users/' + worker.id, worker, httpOptions).pipe(
      catchError(this.handleError('updateWorker', []))
    );
  }

  deleteWorker(id: number): Observable<{} | Worker> {
    return this.http.delete(this.reqResUrl + 'users/' + id, httpOptions).pipe(
      catchError(this.handleError('deleteWorker'))
    );
  }
  addWorker(worker: Worker): Observable<Worker> {
    return this.http.post<Worker>(this.reqResUrl + 'users', httpOptions).pipe(
      catchError(this.handleError<Worker>('addWorker'))
    );
  }

  getStandardSchedule(id: number): Observable<StandardSchedule> {
    // todo fix route
    return this.http.get<StandardSchedule>(this.reqResUrl + `default-schedule/` + id)
      .pipe(
      catchError(this.handleError<StandardSchedule>('Get standard schedule'))
      );
  }

  updateStandardSchedule(schedule: StandardSchedule): Observable<any[] | StandardSchedule> {
    return this.http.put<StandardSchedule>(this.reqResUrl + 'users/' + schedule.id, schedule, httpOptions).pipe(
      catchError(this.handleError('update Standard Schedule', []))
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
}
