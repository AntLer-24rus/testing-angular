import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TUser, TEditUser } from 'src/app/types/user';
import { TResource } from 'src/app/types/resource';
import { map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

type TReqresResponse<T> = {
  data?: T;
};

type TUpdateResponse<T> = T & {
  updateAt: string;
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
    this._client.delete(`https://reqres.in/api/users/${id}`).subscribe(() => {
      const idx = this.users.value.findIndex(({ id: userId }) => userId === id);
      if (idx >= 0) {
        this.users.value.splice(idx, 1);
      }
    });
  }

  updateUser(id: number, newUserData: TEditUser) {
    const request = this._client.put<TUpdateResponse<TEditUser>>(
      `https://reqres.in/api/users/${id}`,
      newUserData
    );

    request.subscribe(() => {
      const idx = this.users.value.findIndex(({ id: userId }) => userId === id);
      if (idx >= 0) {
        this.users.value[idx] = {
          ...this.users.value[idx],
          ...newUserData,
        };
      }
    });
    return request;
  }

  getResources() {
    return this._client
      .get<TReqresResponse<TResource[]>>(
        'https://reqres.in/api/unknown?per_page=12'
      )
      .pipe(map(({ data }) => data ?? []));
  }
}
