import {
  AfterContentInit,
  AfterViewInit,
  Component,
  DoCheck,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
  ContentChild,
} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent
  implements OnInit, DoCheck, OnChanges, AfterContentInit, AfterViewInit
{
  @Input() num: number;
  @ViewChild('subheading') subheading: ElementRef;
  @ContentChild('list') list: ElementRef;

  constructor() {
    console.log('constructor🚀 ~ number', this.num);
  }

  ngOnInit(): void {
    console.log('Child: ngOnInit called');
    console.log('ngOnInit ~ number', this.num);
    console.log('🚀 ~ subheading', this.subheading);
  }

  ngDoCheck() {
    console.log('Child: ngDoCheck called');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Child: ngOnChanges called');
    console.log('🚀 ~ changes', changes);
  }

  ngAfterContentInit(): void {
    console.log('Child: ngAfterContentInit called');
  }

  ngAfterViewInit(): void {
    console.log('Child: ngAfterViewInit called');
    console.log('🚀 ~ subheading', this.subheading);
    console.log('🚀 ~ list', this.list);
  }
}
