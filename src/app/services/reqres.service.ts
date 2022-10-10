import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TUser } from 'src/app/types/user';
import { map } from 'rxjs/operators';

type TReqresResponse<T> = {
  data?: T;
};

@Injectable({
  providedIn: 'root',
})
export class ReqresService {
  constructor(private _client: HttpClient) {}

  getUsers() {
    return this._client.get<TReqresResponse<TUser[]>>(
      'https://reqres.in/api/users'
    );
  }

  getUser(id: string) {
    return this._client
      .get<TReqresResponse<TUser>>(`https://reqres.in/api/users/${id}`)
      .pipe(map(({ data }) => data));
  }
}
