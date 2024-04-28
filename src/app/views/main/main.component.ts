import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit{
  currentDate: Date = new Date();
  private futureDate: Date = new Date('2024-07-24T00:00:00');
  private interval: number = 0;
  timeRemaining: { days: number, hours: number, minutes: number, seconds: number } = {
    days: 0, hours: 0, minutes: 0, seconds: 0
  };

  startTime(): void {
    this.interval = window.setInterval(() => {
      const currentTime = new Date();
      const timeDifference = this.futureDate.getTime() - currentTime.getTime();

      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeDifference % (1000 * 60 * 60) / (1000 * 60)));
      const seconds = Math.floor((timeDifference % (1000 * 60) / 1000));

      this.timeRemaining = {
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds
      };

      if (timeDifference <= 0) {
        clearInterval(this.interval);
        this.timeRemaining = {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0
        }
      }
    }, 1000);
  }

  ngOnInit(): void {
    this.startTime()
  }
}
