import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { UserList, StandardSchedule, WorkerPut, ScheduleEntry, HoursEntry } from './Api-types';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ScheduleService {

  private reqResUrl = 'http://localhost:8080/api/';

  constructor(private http: HttpClient) { }

  getSchedule(date: string): Observable<{} |ScheduleEntry[]> {
    return this.http.get<ScheduleEntry[]>(this.reqResUrl + 'schedule?date=' + date ).pipe(
      catchError(this.handleError<ScheduleEntry[]>('getSchedule'))
    );
  }

  updateSchedule(date: string, schedule: ScheduleEntry[]): Observable<ScheduleEntry[]> {
    console.log(schedule[0].date);
    schedule.forEach(element => {
      element.date = element.date.reverse();
    });
    console.log(schedule[0].date);
    return this.http.put<ScheduleEntry[]>(this.reqResUrl + 'schedule?date=' + date, JSON.stringify(schedule), httpOptions ).pipe(
      catchError(this.handleError<ScheduleEntry[]>('putSchedule'))
    );
  }

  getHoursOverview(year: number, month: number): Observable<HoursEntry[]> {
    return this.http.get<HoursEntry[]>(this.reqResUrl + 'schedule/hours/' + year + '/' + month).pipe(
      catchError(this.handleError<HoursEntry[]>('getHoursOverview'))
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
