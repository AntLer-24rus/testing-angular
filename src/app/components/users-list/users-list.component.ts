import { Component, OnInit } from '@angular/core';
import { ReqresService } from 'src/app/services/reqres.service';
import { TUser } from 'src/app/types/user';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
})
export class UsersListComponent implements OnInit {
  public users: TUser[] = [];

  constructor(private _reqresService: ReqresService) {}

  ngOnInit(): void {
    this._reqresService.getUsers().subscribe(({ data }) => {
      this.users = data || [];
    });
  }
}
