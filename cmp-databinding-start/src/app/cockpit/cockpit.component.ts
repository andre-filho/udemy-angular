import { Component, OnInit, EventEmitter, Output, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';

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
  
  // newServerName    :string = '';
  // newServerContent :string = '';

  @ViewChild('serverContentInput') serverContentInput :ElementRef;

  constructor() { }

  ngOnInit() {
  }

  onAddServer(serverNameInput :HTMLInputElement) {
    this.serverCreated.emit({
      serverName:    serverNameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }

  onAddBlueprint(serverNameInput: HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName:    serverNameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }

}
