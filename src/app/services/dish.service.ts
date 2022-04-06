import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { baseurl } from '../shared/baseurl';
import { Dish } from '../shared/Dish';
import { DISHES } from '../shared/dishes';

@Injectable({
  providedIn: 'root',
})
export class DishService {
  constructor(private httpClient: HttpClient) {}

  getDishes(): Observable<Dish[]> {
    return this.httpClient.get<Dish[]>(baseurl + 'dishes');
  }

  getDish(id: string): Observable<Dish> {
    return this.httpClient.get<Dish>(baseurl + 'dishes/' + id);
  }

  getFeaturedDish(): Observable<Dish> {
    return this.httpClient
      .get<Dish[]>(baseurl + 'dishes?featured=true')
      .pipe(map((dishes) => dishes[0]));
  }

  getDishIds(): Observable<string[]> {
    return of(DISHES.map((dish) => dish.id));
  }
}
