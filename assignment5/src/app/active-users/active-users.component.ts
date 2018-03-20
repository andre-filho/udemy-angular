import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { CounterService } from '../services/counter.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {
  users: string[];

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.users = this.usersService.activeUsers;
  }
  // onSetToInactive(id: number) {
  //   this.usersService.inactivateUser(id);
  //   this.counterService.add();
  // }

  // onSetToActive(id: number) {
  //   this.usersService.activateUser(id);
  //   this.counterService.add();
  // }

  onSetToInactive(id: number) {
    this.usersService.inactivateUser(id);
  }
}
