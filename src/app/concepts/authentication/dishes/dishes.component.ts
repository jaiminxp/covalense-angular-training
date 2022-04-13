import { Component, OnInit } from '@angular/core';
import { Dish } from 'src/app/shared/Dish';
import { DishesService } from '../services/dishes.service';

@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.css'],
})
export class DishesComponent implements OnInit {
  dishes: Dish[];
  constructor(private dishService: DishesService) {}

  ngOnInit(): void {}

  onFetchDishes() {
    this.dishService.getDishes().subscribe((dishes) => {
      this.dishes = dishes;
    });
  }
}
