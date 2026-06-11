import { Component, signal } from '@angular/core';
import { LandingHeader } from '../../../../shared/header/landing-header/landing-header';

@Component({
  selector: 'app-verify-otp',
  imports: [LandingHeader],
  templateUrl: './verify-otp.html',
  styleUrl: './verify-otp.scss',
})
export class VerifyOtp {
  remainingSeconds = signal(120);

  private intervalId?: number;

  ngOnInit() {

    this.intervalId = window.setInterval(() => {

      if (this.remainingSeconds() > 0) {

        this.remainingSeconds.update(
          value => value - 1
        );

      } else {

        clearInterval(this.intervalId);

      }

    }, 1000);

  }

  get timer(): string {

    const totalSeconds =
      this.remainingSeconds();

    const minutes =
      Math.floor(totalSeconds / 60);

    const seconds =
      totalSeconds % 60;

    return `${minutes
      .toString()
      .padStart(2, '0')}:${seconds
      .toString()
      .padStart(2, '0')}`;
  }

  onLogin() {

    console.log('Verify OTP');

    // Call Verify OTP API here

  }

  resendOtp() {

    console.log('Resend OTP');

    // Call Resend OTP API here

    if (this.intervalId) {
      clearInterval(this.intervalId);
    }

    this.remainingSeconds.set(120);

    this.ngOnInit();

  }

  ngOnDestroy() {

    if (this.intervalId) {
      clearInterval(this.intervalId);
    }

  }

}
