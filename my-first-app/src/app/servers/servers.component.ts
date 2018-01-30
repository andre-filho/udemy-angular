import { Component, OnInit } from '@angular/core';

@Component({
  // other forms of selecting a component
  selector: 'app-servers',   // normal stuff
  // selector: '[app-servers]', property selecting
  // selector: '.app-servers',  class selecting
  // be aware that u cannot select by id
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean = false;
  serverCreationStatus = 'no server was created!';
  serverName: string = 'Testserver' ;
  serverCreated :boolean = false;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.serverCreationStatus = 'server was created! Name is ' + this.serverName;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
