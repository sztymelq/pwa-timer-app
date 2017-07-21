import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit, OnChanges {
  @Input() timeMinutes: number;
  @Output() onTimerStateChange = new EventEmitter<boolean>();
  private timerPromise;
  private timeRemaining: number;
  private timerStarted: false;
  private TIMER_INTERVAL = 1000;

  constructor() {}

  ngOnInit() {
    this.updateRemainingTime(this.timeMinutes);
  }

  ngOnChanges(changes) {
    this.updateRemainingTime(changes.timeMinutes);
  }

  updateRemainingTime(minutes) {
    this.timeRemaining = moment.duration(this.timeMinutes, 'minutes').asSeconds();
  }

  setTimer(enable) {
    if (enable) {
      this.timerPromise = setInterval(() => {
        this.timeRemaining = this.timeRemaining - 1;
      }, this.TIMER_INTERVAL);
    } else {
      const timerTaskId = this.timerPromise ? this.timerPromise.data.handleId : undefined;
      clearTimeout(timerTaskId);
    }
    this.timerStarted = enable;
    this.onTimerStateChange.emit(enable);
  }

  reset() {
    this.setTimer(false);
    this.updateRemainingTime(this.timeMinutes);
  }
}
