import { Component, OnInit } from '@angular/core';
import { DishService } from '../services/dish.service';
import { Dish } from '../shared/Dish';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  dish: Dish;

  constructor(private dishService: DishService) {}

  ngOnInit(): void {
    this.dish = this.dishService.getFeaturedDish();
  }
}
