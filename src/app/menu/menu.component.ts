import { Component, Inject, OnInit } from '@angular/core';
import { Dish } from '../shared/Dish';
import { DishService } from '../services/dish.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  dishes: Dish[];
  errMsg: string;
  selectedDish: Dish;

  constructor(
    private dishService: DishService,
    @Inject('BaseURL') public BaseURL: string
  ) {}

  ngOnInit(): void {
    // this.dishes = this.dishService.getDishes();

    this.dishService.getDishes().subscribe({
      next: (DISHES) => {
        this.dishes = DISHES;
      },
      error: (msg) => {
        this.errMsg = msg;
      },
    });
  }
}
