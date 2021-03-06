import { Resource } from '../../models/resource';
import { Injectable } from '@angular/core';
import { serverURL } from '../../constants/apiUrl.js';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';
import { ResponseData } from '../../models/reponse-data';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
  get(resource: Resource): Observable<any> {
    return this.http.get<ResponseData>(`${serverURL}${resource.url}`)
      .pipe(
        map(response => {
          return response;
        }),
        catchError(this.handleError),
      );
  }

  post(resource: Resource): Observable<any> {
    return this.http.post<ResponseData>(`${serverURL}${resource.url}`, resource.body)
      .pipe(
        map(response => {
          return response;
        })
      );
  }

  put(resource: Resource): Observable<any> {
    return this.http.put<ResponseData>(`${serverURL}${resource.url}`, resource.body)
      .pipe(
        map(response => {
          return response;
        }),
        catchError(this.handleError),
      );
  }

  delete(resource: Resource): Observable<any> {
    return this.http.delete<ResponseData>(`${serverURL}${resource.url}`)
      .pipe(
        map(response => {
          return response;
        }),
        catchError(this.handleError),
      );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }
}
