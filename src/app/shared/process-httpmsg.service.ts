import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProcessHTTPMsgService {
  constructor() {}

  public handleError(error: HttpErrorResponse | any): Observable<never> {
    return throwError(() => {
      let errMsg: string;

      if (error.error instanceof ErrorEvent) {
        errMsg = error.error.message;
      } else {
        errMsg = `${error.status} - ${error.statusText || ''} ${error.error}`;
      }

      return new Error(errMsg);
    });
  }
}
