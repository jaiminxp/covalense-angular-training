import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css'],
})
export class ErrorComponent implements OnInit {
  error: string = '';
  message: string = '';
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.error = this.route.snapshot.data['error'];
    this.message = this.route.snapshot.data['message'];
  }
}
