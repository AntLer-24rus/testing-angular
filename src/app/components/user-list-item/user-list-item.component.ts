import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TUser } from 'src/app/types/user';

@Component({
  selector: 'app-user-list-item',
  templateUrl: './user-list-item.component.html',
  styleUrls: ['./user-list-item.component.scss'],
})
export class UserListItemComponent {
  @Input() user!: TUser;

  @Output() onDelete = new EventEmitter<number>();

  public deleting = false;

  public getFullName = () => {
    return `${this.user.first_name} ${this.user.last_name}`;
  };

  deleteItem() {
    this.deleting = true;
    this.onDelete.emit(this.user.id);
  }
}
