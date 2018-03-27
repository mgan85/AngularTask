import { Component, OnInit } from '@angular/core';
import { UsersService } from '../shared/users.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {
  users = [];

  constructor(private userService: UsersService) {}

  ngOnInit() {
    this.users = this.userService.users;
  }

  onSetToActive(id: number) {
    this.userService.toggleUser(id);
  }
}
