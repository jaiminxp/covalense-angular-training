import { Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { DishesComponent } from './dishes/dishes.component';
import { HomeComponent } from './home/home.component';
import { AuthGuardService } from './services/auth-guard.service';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'auth',
    component: AuthComponent,
  },
  {
    path: 'dishes',
    component: DishesComponent,
    canActivate: [AuthGuardService],
  },
];
