import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  intervalSubscription: Subscription;
  unluckyNumber: number = 7;
  constructor() {}

  ngOnInit(): void {
    // this.intervalSubscription = interval(1000).subscribe((num: number) =>
    //   console.log('num = ', num)
    // );

    let customIntervalObservable = new Observable((observer) => {
      let count: number = 0;
      setInterval(() => {
        if (count === 5) {
          observer.complete();
        }
        if (count === this.unluckyNumber) {
          observer.error(new Error('We encountered an unlucky number'));
        }
        observer.next(count);
        count++;
      }, 1000);
    });

    this.intervalSubscription = customIntervalObservable
      .pipe(map((count) => `Count is ${count}`))
      .subscribe({
        next: (count) => {
          console.log(count);
        },
        error: (error) => {
          console.log('🚀 ~ error', error);
        },
        complete: () => {
          console.log('Observable has completed');
        },
      });
  }

  ngOnDestroy(): void {
    console.log('home was destroyed');

    this.intervalSubscription.unsubscribe();
  }
}
