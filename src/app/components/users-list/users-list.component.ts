import { Component, OnInit } from '@angular/core';
import { ReqresService } from 'src/app/services/reqres.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
})
export class UsersListComponent implements OnInit {
  constructor(private _reqresService: ReqresService) {}

  deleteUserWithId(id: number) {
    this._reqresService.deleteUser(id);
  }

  get users() {
    return this._reqresService.users;
  }

  ngOnInit(): void {
    this._reqresService.getUsers();
  }
}
