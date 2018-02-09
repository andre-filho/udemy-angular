import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  oddNumbers  :number[] = [];
  evenNumbers :number[] = [];
  
  onGameStarted(number :number) {
    if (number % 2 === 0) {
      this.evenNumbers.push(number);
    }
    else {
      this.oddNumbers.push(number);
    }
    console.log(number);
  }
}
