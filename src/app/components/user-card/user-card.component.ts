import { Component, Input } from '@angular/core';
import { TUser } from 'src/app/types/user';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss'],
})
export class UserCardComponent {
  @Input() user!: TUser;

  public getFullName = () => {
    return `${this.user.first_name} ${this.user.last_name}`;
  };
}
