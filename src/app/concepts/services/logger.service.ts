import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoggerService {
  constructor() {}

  logIt(logData: string) {
    console.log(logData);
  }
}
