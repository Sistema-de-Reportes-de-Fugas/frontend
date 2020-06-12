import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { map, retry, catchError, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ReporteClienteServiceService {

  getReportes(): Observable<any> {
    console.log('estoy en el getALumnos');
    const headerDict = {
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
    const body = res;
    const lastReportDone = body[Object.keys(body)[Object.keys(body).length - 1]];
    // Tambien se puede cambiar al numero del reporte.
    const _id = lastReportDone._id;
    console.log(_id);

    return _id || {};
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

  constructor(private http: HttpClient) { }
}
