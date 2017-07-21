import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ryanair Progressive Web App';
  private timeMinutesChosen = 2;
  private timeFieldDisabled = false;
  private SOUND_FILE_PATH = 'assets/minigun.mp3';

  toggleTimeField(enabled) {
    this.timeFieldDisabled = enabled;
  }
}
