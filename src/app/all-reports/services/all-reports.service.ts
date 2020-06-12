import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { map, retry, catchError, tap } from 'rxjs/operators';
import { Report } from '../report'
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class AllReportsService {

  reporte: Report[];
  
  private messageSource = new BehaviorSubject<string>("default message");
  currentMessage = this.messageSource.asObservable();

  getReportes(): Observable<any> {
    console.log('estoy en el getALumnos');
    var headerDict = {
      'Content-Type': 'application/json',
      Accept: '*/*',
      'Access-Control-Allow-Origin': '*',
    };

    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };

    return this.http.get('http://localhost:8080/api/reportes', requestOptions).pipe(map(this.extractData), retry(3), catchError(this.handleError));
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
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
  
  changeMessage(message: string) {
    this.messageSource.next(message)
  }


  //getReports() {
   // return REPORTS;
  //}

  constructor(private http: HttpClient) { }

}
