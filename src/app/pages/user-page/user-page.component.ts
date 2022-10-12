import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { ReqresService } from 'src/app/services/reqres.service';
import { TUser } from 'src/app/types/user';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss'],
})
export class UserPageComponent implements OnInit {
  public user?: TUser;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _reqresService: ReqresService,
    private _titleService: Title
  ) {}

  setTitle = () => {
    let title = 'Reqres | User not found';
    if (this.user) {
      title = `Reqres | ${this.user.first_name} ${this.user.last_name}`;
    }
    this._titleService.setTitle(title);
  };

  ngOnInit(): void {
    this._route.paramMap
      .pipe(
        switchMap((params: ParamMap) =>
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          this._reqresService.getUser(params.get('id')!)
        )
      )
      .subscribe((user) => {
        this.user = user;
        this.setTitle();
      });
  }
}
