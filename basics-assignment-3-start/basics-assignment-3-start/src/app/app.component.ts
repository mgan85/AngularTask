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
    // this.Logs.push(this.counter);
    this.Logs.push(new Date());
    this.counter++;
  }

  showParagraph() {
    return this.Logs.length % 2 === 0;
  }

  getColor(log) {
    return log > 3 ? "white" : "black";
  }
}
