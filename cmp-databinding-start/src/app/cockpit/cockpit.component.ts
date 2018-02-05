import { Component, OnInit, EventEmitter, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css'],
  encapsulation: ViewEncapsulation.Emulated // default is Emulated, options are
                                            // None (fuck component specific css)
                                            // and Native (only supported in browsers with
                                            // ShadowDOM)
})
export class CockpitComponent implements OnInit {
  @Output('srvCreated') serverCreated    = new EventEmitter<{serverName :string, serverContent :string}>();
  @Output('bpCreated') blueprintCreated  = new EventEmitter<{serverName :string, serverContent :string}>();
  
  newServerName    :string = '';
  newServerContent :string = '';

  constructor() { }

  ngOnInit() {
  }

  onAddServer() {
    this.serverCreated.emit({
      serverName:    this.newServerName,
      serverContent: this.newServerContent
    });
  }

  onAddBlueprint() {
    this.blueprintCreated.emit({
      serverName: this.newServerName,
      serverContent: this.newServerContent
    });
  }

}
