import { Component, OnInit } from '@angular/core';
import { UsersService } from '../shared/users.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {
  users = [];

  constructor(private userService: UsersService) {}

  ngOnInit() {
    this.users = this.userService.users;
  }

  onSetToInactive(id: number) {
    this.userService.toggleUser(id);
  }
}
