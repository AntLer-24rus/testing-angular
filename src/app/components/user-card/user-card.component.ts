import { Component, Input } from '@angular/core';
import { ReqresService } from 'src/app/services/reqres.service';
import { TEditUser, TUser } from 'src/app/types/user';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss'],
})
export class UserCardComponent {
  @Input() user!: TUser;

  constructor(private _reqresService: ReqresService) {}

  public showEditDialog = false;

  public getFullName = () => {
    return `${this.user.first_name} ${this.user.last_name}`;
  };

  public updateUser(newUserData: TEditUser) {
    this._reqresService.updateUser(this.user.id, newUserData).subscribe(() => {
      this.user = { ...this.user, ...newUserData };
      this.showEditDialog = false;
    });
  }
}
