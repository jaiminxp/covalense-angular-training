import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Dish } from '../shared/Dish';
import { DishService } from '../services/dish.service';
import { switchMap } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.css'],
})
export class DishdetailComponent implements OnInit {
  dish: Dish;
  dishCopy: Dish;

  dishIds: string[];
  next: string;
  prev: string;

  commentForm: FormGroup;
  comment: {
    rating: number;
    comment: string;
    author: string;
    date: string;
  };

  @ViewChild('cform') commentFormDirective: any;
  constructor(
    private dishService: DishService,
    private route: ActivatedRoute,
    private location: Location,
    @Inject('BaseURL') public BaseURL: string,
    private fb: FormBuilder
  ) {
    this.createForm();
  }

  createForm() {
    this.commentForm = this.fb.group({
      author: '',
      rating: 3,
      comment: '',
    });
  }

  onSubmit() {
    this.comment = { ...this.commentForm.value, date: new Date().toString() };
    this.dishCopy.comments.push(this.comment);

    this.dishService.updateDish(this.dishCopy).subscribe((dish) => {
      this.dish = dish;
    });

    //reset form
    this.commentForm.reset();
    this.commentFormDirective.resetForm();
  }

  ngOnInit(): void {
    this.dishService.getDishIds().subscribe((dishIds) => {
      this.dishIds = dishIds;
    });

    this.route.params
      .pipe(switchMap((params) => this.dishService.getDish(params['id'])))
      .subscribe((dish) => {
        this.dish = dish;
        this.dishCopy = dish;
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
