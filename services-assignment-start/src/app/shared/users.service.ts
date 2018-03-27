import { Injectable } from '@angular/core';
import {CounterService} from './counter.service';

@Injectable()
export class UsersService {
  users = [
    {name: 'Max', status: 'active'},
    {name: 'Anna', status: 'active'},
    {name: 'Chris', status: 'inactive'},
    {name: 'Manu', status: 'inactive'}
    ];

  constructor(private counterService: CounterService) {}

  toggleUser(id: number) {
    this.users[id].status = this.users[id].status === 'active' ? 'inactive' : 'active';
    this.counterService.Count(this.users[id].status );
    this.counterService.ShowInLogStats();
  }
}
