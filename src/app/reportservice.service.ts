import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReportserviceService {

  _url = 'http://localhost:3000/';
  constructor(private _http: HttpClient) {}

  reportservice(userData) {
    return this._http.post<any>(this._url, userData);
  }
}
