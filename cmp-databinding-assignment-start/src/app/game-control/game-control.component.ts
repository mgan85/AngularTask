import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() myEvent = new EventEmitter<{myNumber: number}>();
  counter = 1;
  start = null;

  Start() {
    this.start = setInterval(() => {
      this.myEvent.emit( {myNumber: this.counter++});
    }, 1000);
  }

  Stop() {
    clearInterval(this.start);
    this.counter = 1;
  }

  constructor() { }

  ngOnInit() {
  }

}
