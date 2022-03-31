import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommunicationService {
  activatedEvent = new Subject<boolean>();

  constructor() {}
}
