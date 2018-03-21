import { Component } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  templateUrl: './warning-alert.component.html',
  styles: [`
    .warning {
      background-color: red;
      color: black;
      border: 2px solid darkred;
      width: 10em;
      margin:auto;
    }
  `]
})
export class WarningAlertComponent {

}
