import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
    .afterFour {
      background: blue;
    }
  `]
})
export class AppComponent {
  Logs = [];
  counter = 1;

  addLog() {
    this.Logs.push(this.counter);
    this.counter++;
  }

  showParagraph() {
    return this.counter % 2 === 0;
  }

  getColor(log) {
    return log > 4 ? "white" : "black";
  }
}
