import { Component, Inject, OnInit } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Dish } from '../shared/Dish';
import { DishService } from '../services/dish.service';
import { switchMap } from 'rxjs';
@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.css'],
})
export class DishdetailComponent implements OnInit {
  dish: Dish;
  dishIds: string[];
  next: string;
  prev: string;

  constructor(
    private dishService: DishService,
    private route: ActivatedRoute,
    private location: Location,
    @Inject('BaseURL') public BaseURL: string
  ) {}

  ngOnInit(): void {
    this.dishService.getDishIds().subscribe((dishIds) => {
      this.dishIds = dishIds;
    });

    this.route.params
      .pipe(switchMap((params) => this.dishService.getDish(params['id'])))
      .subscribe((dish) => {
        this.dish = dish;
        this.setPrevNext(dish.id);
      });
  }

  setPrevNext(id: string) {
    let index = this.dishIds.indexOf(id);
    let l = this.dishIds.length;
    this.prev = this.dishIds[(index - 1 + l) % l];
    this.next = this.dishIds[(index + 1 + l) % l];
  }

  goBack() {
    this.location.back();
  }
}
