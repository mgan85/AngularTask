import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  Odd = [];
  Even = [];

  ReactOnEvent(data: {myNumber: number}) {
    data.myNumber % 2 === 0 ? this.Even.push(data.myNumber) : this.Odd.push(data.myNumber);
  }
}
