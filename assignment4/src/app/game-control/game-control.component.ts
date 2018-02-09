import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  // @Output('gameStart') start = new EventEmitter<{aNumber :number}>();
  // isGameStopped :boolean = true;
  // counter :number = 0;
  interval;
  lastNumber :number = 0;
  @Output('gameStart') intervalFired = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  onGameStart() {
    this.interval = setInterval(()=>{
      this.intervalFired.emit(this.lastNumber + 1);
      this.lastNumber++;
    }, 1000);
    // if (!(this.counter != 0)) {
    //   this.counter = 0;
    // }

    // while(!this.isGameStopped) {
    //   setInterval(1000);
    //   this.start.emit({
    //     aNumber: this.counter
    //   });
    //   console.log('dhfjdshfkh');
      
    //   this.counter++;
    // }
  }

  onGameStop() {
    clearInterval(this.interval);
    this.lastNumber = 0;
    // this.isGameStopped = true;
  }

}
