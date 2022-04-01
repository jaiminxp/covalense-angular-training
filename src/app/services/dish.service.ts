import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { Dish } from '../shared/Dish';
import { DISHES } from '../shared/dishes';

@Injectable({
  providedIn: 'root',
})
export class DishService {
  constructor() {}

  getDishes(): Observable<Dish[]> {
    return of(DISHES).pipe(delay(2000));
  }

  getDish(id: string): Dish {
    return DISHES.filter((dish) => id === dish.id)[0];
  }

  getFeaturedDish(): Dish {
    return DISHES.filter((dish) => dish.featured === true)[0];
  }
}
