import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { exhaustMap, Observable, take, tap } from 'rxjs';
import { Dish } from 'src/app/shared/Dish';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class DishesService {
  constructor(
    private httpClient: HttpClient,
    private authService: AuthService
  ) {}

  getDishes(): Observable<Dish[]> {
    return this.authService.user.pipe(
      take(1),
      exhaustMap((user) => {
        console.log('🚀 ~ user', user);
        return this.httpClient.get<Dish[]>(
          'https://restaurant-angular-app-87e25-default-rtdb.asia-southeast1.firebasedatabase.app/dishes.json',
          {
            params: new HttpParams().set('auth', user.token),
          }
        );
      })
    );
  }
}
