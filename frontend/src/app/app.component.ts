import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'frontend';
  selected = 'option2';

  rickRoll() {
    window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
  }
}
