import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { map, retry, catchError, tap } from 'rxjs/operators';
import { Reporte } from '../models/reporte';

@Injectable({
  providedIn: 'root'
})
export class ReporteService {

  reporte: Reporte[];
  address: 'http://localhost:8080/api/reportes';

  getReportes(id: string): Observable<any> {
    console.log('estoy en el getALumnos');
    const headerDict = {
      'Content-Type': 'application/json',
      Accept: '*/*',
      'Access-Control-Allow-Origin': '*',
    };

    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };

    return this.http.get(this.address + '/' + id, requestOptions).pipe(map(this.extractData), retry(3), catchError(this.handleError));
    // return this.http.get('http://localhost:8080/api/reportes', requestOptions);
    // return this.http.get('http://localhost:8080/api/reportes', requestOptions);
    // return this.http.get('http://localhost:8080/api/reportes' + '/' + '5edd22ddea83b761f8d358e5');
  }

  deleteReportes(id: string): Observable<any> {
    console.log('estoy en el getALumnos');
    const headerDict = {
      'Content-Type': 'application/json',
      Accept: '*/*',
      'Access-Control-Allow-Origin': '*',
    };

    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };

    return this.http.delete(this.address + '/' + id, requestOptions).pipe(map(this.extractData), retry(3), catchError(this.handleError));
    // return this.http.get('http://localhost:8080/api/reportes', requestOptions);
    // return this.http.get('http://localhost:8080/api/reportes', requestOptions);
    // return this.http.get('http://localhost:8080/api/reportes' + '/' + '5edd22ddea83b761f8d358e5');
  }
  updateReportes(id: string): Observable<any> {
    console.log('estoy en el getALumnos');
    const headerDict = {
      'Content-Type': 'application/json',
      Accept: '*/*',
      'Access-Control-Allow-Origin': '*',
    };

    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };

    // return this.http.put('http://localhost:8080/api/reportes' +
    // '/' + id, requestOptions).pipe(map(this.extractData), retry(3), catchError(this.handleError));
    return this.http.put(this.address + '/' + id, requestOptions);
    // return this.http.get('http://localhost:8080/api/reportes', requestOptions);
    // return this.http.get('http://localhost:8080/api/reportes', requestOptions);
    // return this.http.get('http://localhost:8080/api/reportes' + '/' + '5edd22ddea83b761f8d358e5');
  }


  getId(_id) {
    return this.http.get(this.address + '/' + '5edd22ddea83b761f8d358e5');
  }
  private extractData(res: Response) {
    const body = Array.of(res);
    return body || {};
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errorsi
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
  // getReports() {
  // return REPORTS;
  // }
  constructor(private http: HttpClient) { }
}
