import { Routes } from '@angular/router';
import { Login } from './login/login';
import { VerifyOtp } from './verify-otp/verify-otp';

export const authRoutes: Routes = [
  {
    path: 'login',
    component: Login,
  },
  {
    path: 'verify-otp',
    component: VerifyOtp,
  },
];
