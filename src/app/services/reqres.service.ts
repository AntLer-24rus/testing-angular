import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TUser } from 'src/app/types/user';
import { map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

type TReqresResponse<T> = {
  data?: T;
};

@Injectable({
  providedIn: 'root',
})
export class ReqresService {
  constructor(private _client: HttpClient) {}

  public users = new BehaviorSubject<TUser[]>([]);

  getUsers() {
    return this._client
      .get<TReqresResponse<TUser[]>>('https://reqres.in/api/users')
      .pipe(map(({ data }) => data))
      .subscribe((users) => {
        if (users) {
          this.users.next(users);
        }
      });
  }

  getUser(id: string) {
    return this._client
      .get<TReqresResponse<TUser>>(`https://reqres.in/api/users/${id}`)
      .pipe(map(({ data }) => data));
  }

  deleteUser(id: number) {
    const idx = this.users.value.findIndex(({ id: userId }) => userId === id);
    if (idx >= 0) {
      this._client.delete(`https://reqres.in/api/users/${id}`).subscribe(() => {
        this.users.value.splice(idx, 1);
      });
    }
  }
}
