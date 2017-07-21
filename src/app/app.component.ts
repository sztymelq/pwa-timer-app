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

  toggleTimeField(enabled) {
    this.timeFieldDisabled = enabled;
  }
}
