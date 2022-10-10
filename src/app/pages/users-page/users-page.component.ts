import { Component, OnInit } from '@angular/core';
import { ReqresService } from 'src/app/services/reqres.service';
import { TUser } from 'src/app/types/user';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
})
export class UsersPageComponent implements OnInit {
  public users: TUser[] = [];

  constructor(private _reqresService: ReqresService) {}

  ngOnInit(): void {
    this._reqresService.getUsers().subscribe(({ data }) => {
      this.users = data || [];
    });
  }
}
