import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SquarenumComponent } from './squarenum.component';

describe('SquarenumComponent', () => {
  let component: SquarenumComponent;
  let fixture: ComponentFixture<SquarenumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SquarenumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SquarenumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
