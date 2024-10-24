import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-time',
  standalone: true,
  imports: [],
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.scss']
})
export class TimeComponent implements OnInit {
  hour = 0;
  min = 0;
  seg = 0;
  private intervalId: any;
  targetDate: Date = new Date('2024-08-28T23:59:00');

  ngOnInit() {
    this.calculateTimeDifference();
    this.startCountdown();
  }

  calculateTimeDifference() {
    const now = new Date().getTime();
    const target = this.targetDate.getTime();
    const timeDifference = target - now;

    if (timeDifference > 0) {
      this.hour = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      this.min = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      this.seg = Math.floor((timeDifference % (1000 * 60)) / 1000);
    } else {
      this.stopCountdown();
    }
  }

  startCountdown() {
    this.intervalId = setInterval(() => {
      this.calculateTimeDifference();
    }, 1000);
  }

  stopCountdown() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
