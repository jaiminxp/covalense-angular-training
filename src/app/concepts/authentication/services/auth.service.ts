import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { ProcessHTTPMsgService } from 'src/app/shared/process-httpmsg.service';
import { User } from 'src/app/shared/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user = new Subject<User>();
  constructor(
    private httpClient: HttpClient,
    private processHTTPMsgService: ProcessHTTPMsgService
  ) {}

  signup(user: { email: string; password: string }) {
    return this.httpClient
      .post<AuthResponse>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA635j-tag7iUFJSb8240yXLs7AWvR9YMI',
        {
          ...user,
          returnSecureToken: true,
        }
      )
      .pipe(
        catchError(this.processHTTPMsgService.handleError),
        tap(({ email, localId, idToken, expiresIn }) =>
          this.handleAuthentication(email, localId, idToken, +expiresIn)
        )
      );
  }

  login(user: { email: string; password: string }) {
    return this.httpClient
      .post<AuthResponse>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyA635j-tag7iUFJSb8240yXLs7AWvR9YMI',
        {
          ...user,
          returnSecureToken: true,
        }
      )
      .pipe(
        catchError(this.processHTTPMsgService.handleError),
        tap(({ email, localId, idToken, expiresIn }) =>
          this.handleAuthentication(email, localId, idToken, +expiresIn)
        )
      );
  }

  logout() {
    this.user.next(null);
  }

  handleAuthentication(
    email: string,
    localId: string,
    idToken: string,
    expiresIn: number
  ) {
    const expirationDate = new Date(new Date().getTime() + +expiresIn * 1000);
    const user = new User(email, localId, idToken, expirationDate);

    this.user.next(user);
  }
}

interface AuthResponse {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}
