import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RootComponent } from './root/root.component';
import { AuthComponent } from './auth/auth.component';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { routes } from './routes';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import {
  MatFormFieldControl,
  MatFormFieldModule,
} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [HomeComponent, RootComponent, AuthComponent],
  imports: [
    CommonModule,
    BrowserModule,
    MatToolbarModule,
    MatButtonModule,
    RouterModule.forRoot(routes),
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
  ],
  bootstrap: [RootComponent],
})
export class AuthenticationModule {}
