import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private httpClient: HttpClient) {}

  signup(user: { email: string; password: string }) {
    return this.httpClient.post(
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA635j-tag7iUFJSb8240yXLs7AWvR9YMI',
      {
        ...user,
        returnSecureToken: true,
      }
    );
  }
}
