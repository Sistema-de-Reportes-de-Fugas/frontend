import { Injectable } from '@angular/core';
import { HttpClientModule, HttpErrorResponse, HttpHeaders, HttpClient } from '@angular/common/http';
import { Report } from '../../all-reports/report';
import { Observable, of, throwError } from 'rxjs';
import { map, retry, catchError, tap } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class ReporteService {

  eporte: Report[];
  
  private messageSource = new BehaviorSubject<string>("default message");
  currentMessage = this.messageSource.asObservable();

  getReportes(id: string): Observable<any> {
    console.log('estoy en el getALumnos');
    var headerDict = {
      'Content-Type': 'application/json',
      Accept: '*/*',
      'Access-Control-Allow-Origin': '*',
    };

    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };

    return this.http.get('http://localhost:8080/api/reportes' + '/' + id, requestOptions).pipe(map(this.extractData), retry(3), catchError(this.handleError));
    //return this.http.get('http://localhost:8080/api/reportes', requestOptions);
    //return this.http.get('http://localhost:8080/api/reportes', requestOptions);
    //return this.http.get('http://localhost:8080/api/reportes' + '/' + '5edd22ddea83b761f8d358e5');
    
  }

  updateReportes(id: string): Observable<any> {
    console.log('estoy en el getALumnos');
    var headerDict = {
      'Content-Type': 'application/json',
      Accept: '*/*',
      'Access-Control-Allow-Origin': '*',
    };

    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };

    //return this.http.put('http://localhost:8080/api/reportes' + '/' + id, requestOptions).pipe(map(this.extractData), retry(3), catchError(this.handleError));
    return this.http.put('http://localhost:8080/api/reportes' + '/' + id, requestOptions)
    //return this.http.get('http://localhost:8080/api/reportes', requestOptions);
    //return this.http.get('http://localhost:8080/api/reportes', requestOptions);
    //return this.http.get('http://localhost:8080/api/reportes' + '/' + '5edd22ddea83b761f8d358e5');
    
  }


  private extractData(res: Response) {
    let body = res;
    console.log(body)
    return body|| {};
  }
  
  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errorsi
      errorMessage = `Error: ${error.error.message} al querer ingresar tus datos`;
    } else {
      // Server-side errors
      errorMessage = `Error: ${error.status}\nPor favor ingresa un número de reporte valido`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
  
  changeMessage(message: string) {
    this.messageSource.next(message)
    console.log(message)
  }

  

  constructor(private http: HttpClient) { }
}
