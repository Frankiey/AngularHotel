import { Injectable } from '@angular/core';
import { Worker} from './worker';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { UserList, SingleUser, User} from './Api-types';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class WorkerService {
  private reqResUrl = 'https://reqres.in/api/';

  workers: Worker[];

  constructor(private http: HttpClient) {
    // this.workers = [
    //   {
    //     id: 1,
    //     first_name: 'Jan Janssen',
    //     last_name: '',
    //     avatar: '',
    //     role: 'schoonmaker',
    //     dateFrom: new Date(2017, 1)
    //   },
    //   {
    //     id: 2,
    //     first_name: 'Karel Karelssen',
    //     last_name: '',
    //     avatar: '',
    //     role: 'receptionist',
    //     dateFrom: new Date(2017, 5)
    //   },
    //   {
    //     id: 3,
    //     first_name: 'Piet Pieterssen',
    //     last_name: '',
    //     avatar: '',
    //     role: 'Kok',
    //     dateFrom: new Date(2017, 10)
    //   }
    // ];
   }

getWorker(id: number): Observable<SingleUser> {
  return this.http.get<SingleUser>(this.reqResUrl + 'users/' + id).pipe(
    catchError(this.handleError<SingleUser>('getWorker'))
  );
  // console.log('getworker in service:' + id);
  // console.log(this.workers);
  // return this.workers.find( x => x.id === id);
}


getWorkers(): void {
  this.http.get<UserList>(this.reqResUrl + 'users?per_page=999')
    .pipe(
      catchError(this.handleError<UserList>('getWorkers'))
    )
    .subscribe(x => {
      // Todo check any
      let userList: UserList =  x as UserList;
      let users: User[] = userList.data;
      let workers2: Worker[] = users as Worker[];

      this.workers = workers2;
      console.log('Message received');
      console.log(workers2);
  });
}

updateWorker(worker: Worker): Observable<any[] | Worker> {
  return this.http.put<Worker>(this.reqResUrl + 'users/' + worker.id, worker, httpOptions).pipe(
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
    tap((worker: Worker) => console.log(`added hero w/ id=${worker.id}`)),
    catchError(this.handleError<Worker>('addHero'))
  )
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
