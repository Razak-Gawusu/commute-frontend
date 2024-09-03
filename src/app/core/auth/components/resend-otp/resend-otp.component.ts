import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { interval, Observable, Subscription, timer } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { CountDownPipe } from '../../../../shared/pipes';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'cm-resend-code-countdown',
  standalone: true,
  imports: [CountDownPipe, CommonModule],
  template: `
    <div class="flex justify-between items-center text-sm">
      <span>Didn't receive code?</span>

      <button
        type="button"
        [disabled]="countdownDuration > 0"
        (click)="resendCode()"
        class="text-amber-600 hover:underline"
      >
        Resend
        <span *ngIf="countdownDuration > 0">
          in
          {{ countdownDuration | countDownPipe }}
        </span>
      </button>
    </div>
  `,
})
export class ResendCodeCountdownComponent {
  @Input() countdownDuration: number = 60; // Default countdown duration in seconds
  @Output() resendCodeEvent = new EventEmitter();
  tick = 1000;
  countDown: Subscription;

  constructor() {
    this.countDown = timer(0, this.tick)
      .pipe(take(this.countdownDuration))
      .subscribe(() => {
        --this.countdownDuration;
        if (this.countdownDuration == 0) {
          this.countDown.unsubscribe();
        }
      });
  }

  resendCode() {
    this.resendCodeEvent.emit();
  }
}
