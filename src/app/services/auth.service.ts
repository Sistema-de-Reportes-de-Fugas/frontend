import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  private loggedInStatus = JSON.parse(localStorage.getItem('loggedIn') || 'false');

  getUserDetails(correo, contrasena) {

  }
  setLoggedIn(value: boolean) {
    this.loggedInStatus = value;
    localStorage.setItem('loggedIn', 'true');
  }
  getLoggedIn(value: boolean) {
    this.loggedInStatus = value;
    return JSON.parse(localStorage.getItem('loggedIn') || this.loggedInStatus.toString());
  }

}
