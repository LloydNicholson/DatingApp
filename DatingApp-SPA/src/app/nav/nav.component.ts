import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};

  constructor(private auth: AuthService) {
  }

  ngOnInit() {
  }

  login() {
    this.auth.login(this.model).subscribe(next => {
      console.log('Logged in successfully');
    }, err => {
      console.log('Failed to login');
    });
  }

  loggedIn() {
    const token = localStorage.getItem('token');
    // return false if not true
    return !!token;
  }

  logout() {
    localStorage.removeItem('token');
    console.log('Logged out');
  }

}
