import { Injectable } from '@angular/core';
import { promotions } from '../shared/promotions';
import { Promotion } from '../shared/Promotion';

@Injectable({
  providedIn: 'root',
})
export class PromotionService {
  constructor() {}

  getPromotions(): Promotion[] {
    return promotions;
  }

  getFeaturedPromotion(): Promotion {
    return promotions.filter((promotion) => promotion.featured === true)[0];
  }
}
