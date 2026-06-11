import { Component, signal } from '@angular/core';
import { email, form, FormField, required } from '@angular/forms/signals';
import { LandingHeader } from "../../../../shared/header/landing-header/landing-header";
@Component({
  selector: 'app-login',
  imports: [FormField, LandingHeader],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  loginModel = signal({
    email: '',
  });
  loginForm = form(this.loginModel, (path) => {
    required(path.email, {
      message: 'Email is required!',
    });
    email(path.email, {
      message: 'Please enter a valid email',
    });
  });
  getOtp() {
    console.log('Hiiii');
  }
}
