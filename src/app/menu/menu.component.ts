import { Component, OnInit } from '@angular/core';
import { Dish } from '../shared/Dish';
import { DishService } from '../services/dish.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  dishes: Dish[];

  selectedDish: Dish;

  constructor(private dishService: DishService) {}

  ngOnInit(): void {
    console.log('🚀 ~ before', this.dishes);
    // this.dishes = this.dishService.getDishes();

    this.dishService.getDishes().subscribe((DISHES) => {
      this.dishes = DISHES;
      console.log('🚀 ~ after 2 sec', this.dishes);
    });
  }
}
