import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css'],
})
export class RootComponent implements OnInit {
  isLoggedIn: boolean = true;
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.isLoggedIn = this.authService.isLoggedIn;
  }

  onLogin() {
    this.authService.logIn();
    this.isLoggedIn = this.authService.isLoggedIn;
  }

  onLogout() {
    this.authService.logOut();
    this.isLoggedIn = this.authService.isLoggedIn;
  }
}
