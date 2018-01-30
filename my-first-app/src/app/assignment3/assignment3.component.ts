import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment3',
  templateUrl: './assignment3.component.html',
  styleUrls: ['./assignment3.component.css']
})
export class Assignment3Component implements OnInit {
  showSecret :boolean;
  log = [];

  constructor() { 
    this.showSecret = false;
  }

  ngOnInit() {
  }

  onToggle() {
    this.showSecret = !this.showSecret;
    this.log.push(this.log.length + 1);
  }

}
