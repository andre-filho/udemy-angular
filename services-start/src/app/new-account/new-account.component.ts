import { Component, EventEmitter, Output } from '@angular/core';

import { LoggingService } from "../logging.service";

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  // tells angular to provide the thingy that we need for the service
  providers: [LoggingService]
})
export class NewAccountComponent {
  @Output() accountAdded = new EventEmitter<{name: string, status: string}>();

  // this will inject the dependency
  constructor(private loggingService: LoggingService) {}

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountAdded.emit({
      name: accountName,
      status: accountStatus
    });
    this.loggingService.logStatusChange(accountStatus);

    // console.log('A server status changed, new status: ' + accountStatus);

    // below: "this is BULLSHIT"
    // const service = new LoggingService();
    // service.logStatusChange(accountStatus);
  }
}
