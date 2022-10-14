import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
  constructor(private _authService: AuthService) {}

  get isAuth() {
    return this._authService.isAuth;
  }

  public logout() {
    this._authService.logout();
  }
}
