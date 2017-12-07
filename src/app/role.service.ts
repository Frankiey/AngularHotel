import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Role } from './Role';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { RoleList } from './Api-types';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class RoleService {

  constructor(private http: HttpClient) { }

  private apiUrl = 'http://localhost:8080/api/';
  
  roles: RoleList;

  getRoles(page: number = 1): Observable<RoleList> {
    return this.http.get<RoleList>(this.apiUrl + `roles`)
      .pipe(
        catchError(this.handleError<RoleList>('getRoles'))
      );
  }

  getRole(id: number = 0): Observable<Role> {
    return this.http.get<Role>(this.apiUrl + `roles/` + id)
      .pipe(
        catchError(this.handleError<Role>('getRoles'))
      );
  }

  addRole(role: Role): Observable<Role> {
    return this.http.post<Role>(this.apiUrl + 'roles', role , httpOptions).pipe(
      catchError(this.handleError<Role>('addRole'))
    );
  }

  deleteRole(id: number): Observable<{} | Role> {
    return this.http.delete(this.apiUrl + 'roles/' + id, httpOptions).pipe(
      catchError(this.handleError('deleteRole'))
    );
  }

  updateRole(role: Role): Observable<any | Role> {
    return this.http.put<Role>(this.apiUrl + 'roles/' + role.id, role, httpOptions).pipe(
      catchError(this.handleError('updateRole', []))
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
