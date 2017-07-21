import {Component, ElementRef, EventEmitter, Input, OnChanges, Output, ViewChild} from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnChanges {
  @Input() timeMinutes: number;
  @Input() soundPath: string;
  @Output() onTimerStateChange = new EventEmitter<boolean>();
  @ViewChild('audioNotification') audioElement: ElementRef;

  private timerPromise;
  private timeRemaining: number;
  private timerStarted: false;
  private TIMER_INTERVAL = 1000;

  constructor() {}

  ngOnChanges(changes) {
    this.updateRemainingTime(changes.timeMinutes);
  }

  updateRemainingTime(minutes) {
    this.timeRemaining = moment.duration(this.timeMinutes, 'minutes').asSeconds();
  }

  onTimerTick() {
    this.timeRemaining = this.timeRemaining - 1;
    if (!this.timeRemaining) {
      this.playSoundAndReset();
    }
  }

  setTimer(enable) {
    if (enable) {
      this.timerPromise = setInterval(this.onTimerTick.bind(this), this.TIMER_INTERVAL);
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

  private playSoundAndReset() {
    this.audioElement.nativeElement.play();
    this.reset();
  }
}
