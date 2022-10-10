import { Component, Input } from '@angular/core';
import { TUser } from 'src/app/types/user';

@Component({
  selector: 'app-user-list-item',
  templateUrl: './user-list-item.component.html',
  styleUrls: ['./user-list-item.component.scss'],
})
export class UserListItemComponent {
  @Input() user!: TUser;
}
