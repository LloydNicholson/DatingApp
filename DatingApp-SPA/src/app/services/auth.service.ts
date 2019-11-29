import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
  }

  login(model: any) {
    return this.http.post<any>(environment.datingAppApiServer + '/auth/login', model)
      .pipe(
        map(res => {
          const user = res;
          if (user) {
            localStorage.setItem('token', user.token);
          }
        })
      );
  }

  register(model: any) {
    return this.http.post(environment.datingAppApiServer + '/auth/register', model);
  }
}
