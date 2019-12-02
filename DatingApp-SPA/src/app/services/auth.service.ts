import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  jwtHelper = new JwtHelperService();
  decodedToken: any;

  constructor(private http: HttpClient) {
  }

  login(model: any) {
    return this.http.post<any>(environment.datingAppApiServer + '/auth/login', model)
      .pipe(
        map(res => {
          const user = res;
          if (user) {
            localStorage.setItem('token', user.token);
            this.decodedToken = this.jwtHelper.decodeToken(user.token);
            console.log(this.decodedToken);
          }
        })
      );
  }

  register(model: any) {
    return this.http.post(environment.datingAppApiServer + '/auth/register', model);
  }

  loggedIn() {
    const token = localStorage.getItem('token');
    return !this.jwtHelper.isTokenExpired(token);
  }
}
