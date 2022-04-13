import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  isLoginMode: boolean = true;
  isLoading: boolean = false;
  errMsg: string;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }

    this.isLoading = true;

    const { email, password } = form.value;
    let authObservable: Observable<any>;

    if (this.isLoginMode) {
      authObservable = this.authService.login({ email, password });
    } else {
      authObservable = this.authService.signup({ email, password });
    }

    authObservable.subscribe({
      next: (user) => {
        console.log('🚀 ~ user', user);
        this.isLoading = false;
      },
      error: (errMsg) => {
        this.errMsg = errMsg;
        this.isLoading = false;
      },
    });
  }
}
