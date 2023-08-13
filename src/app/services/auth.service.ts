import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { logInUser } from '../interfaces/user.interface';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private url = 'https://dummyjson.com/auth/login';

  constructor(private http: HttpClient) {}

  login(user: logInUser) {
    return this.http.post(this.url, user).pipe(
      map((response) => {
        localStorage.setItem('currentUser', JSON.stringify(response));
        return response;
      })
    );
  }

  isLoggedIn() {
    return localStorage.getItem('currentUser');
  }

  logout() {
    localStorage.removeItem('currentUser');
  }
}
