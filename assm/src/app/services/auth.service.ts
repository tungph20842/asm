import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  API_URL: string = 'http://localhost:8088/api';

  constructor(private http: HttpClient) { }

  signup(user: any): Observable<any> {
    return this.http.post(`http://localhost:8088/api/auth/signup`, user);
  }
  signin(user: any): Observable<any> {
    return this.http.post(`http://localhost:8088/api/auth/signin`, user)
  }
  isAuthenticated(): any {
    return JSON.parse(localStorage.getItem('credential')!) || {};
  }
}
