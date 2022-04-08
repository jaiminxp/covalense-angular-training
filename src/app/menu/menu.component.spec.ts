import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { BrowserModule, By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';

import { MenuComponent } from './menu.component';
import { DishService } from '../services/dish.service';
import { Observable, of } from 'rxjs';
import { Dish } from '../shared/Dish';
import { DISHES } from '../shared/dishes';
import { baseurl } from '../shared/baseurl';
import { DebugElement } from '@angular/core';

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;

  const dishServiceStub = {
    getDishes: (): Observable<Dish[]> => {
      console.log('🚀 ~ DISHES', DISHES);

      return of(DISHES);
    },
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MenuComponent],
      imports: [
        BrowserModule,
        HttpClientModule,
        MatProgressSpinnerModule,
        FlexLayoutModule,
        MatGridListModule,
        RouterTestingModule.withRoutes([
          {
            path: 'menu',
            component: MenuComponent,
          },
        ]),
      ],
      providers: [
        { provide: DishService, useValue: dishServiceStub },
        { provide: 'BaseURL', useValue: baseurl },
      ],
    }).compileComponents();

    const dishservice = TestBed.inject(DishService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('dishes should be 4', () => {
    expect(component.dishes.length).toBe(4);
    expect(component.dishes[0].name).toBe('Uthappizza');
  });

  it('should use dishes in the template', () => {
    fixture.detectChanges();

    let de: DebugElement;
    let el: HTMLElement;

    de = fixture.debugElement.query(By.css('h1'));
    el = de.nativeElement;

    expect(el.textContent).toContain(DISHES[0].name.toUpperCase());
  });
});
