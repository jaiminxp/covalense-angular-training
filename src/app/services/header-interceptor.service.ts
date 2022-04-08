import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class HeaderInterceptorService implements HttpInterceptor {
  constructor() {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (req.method === 'PUT') {
      const modifiedRequest = req.clone({
        headers: req.headers.append('Content-Type', 'application/json'),
      });

      req = modifiedRequest;
    }
    return next.handle(req).pipe(
      tap((event) => {
        console.log('🚀 ~ event', event);
      })
    );
  }
}
