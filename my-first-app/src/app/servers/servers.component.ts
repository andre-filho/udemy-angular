import { Component, OnInit } from '@angular/core';

@Component({
  // other forms of selecting a component
  selector: 'app-servers',   // normal stuff
  // selector: '[app-servers]', property selecting
  // selector: '.app-servers',  class selecting
  // be aware that u cannot select by id
  template: `
    <app-server></app-server>
    <app-server></app-server>`,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
