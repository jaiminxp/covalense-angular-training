import { Component, Inject, OnInit } from '@angular/core';
import { DishService } from '../services/dish.service';
import { LeaderService } from '../services/leader.service';
import { PromotionService } from '../services/promotion.service';
import { Dish } from '../shared/Dish';
import { Leader } from '../shared/leaders';
import { Promotion } from '../shared/Promotion';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  dish: Dish;
  promotion: Promotion;
  leader: Leader;
  errMsg: string;

  constructor(
    private dishService: DishService,
    private promotionService: PromotionService,
    private leaderService: LeaderService,
    @Inject('BaseURL') public BaseURL: string
  ) {}

  ngOnInit(): void {
    this.dishService.getFeaturedDish().subscribe({
      next: (dish) => {
        this.dish = dish;
      },
      error: (msg) => {
        this.errMsg = msg;
      },
    });
    this.promotion = this.promotionService.getFeaturedPromotion();
    this.leader = this.leaderService.getFeaturedLeader();
  }
}
