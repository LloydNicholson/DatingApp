import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Output() cancelRegister = new EventEmitter();
  model: any = {};

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
  }

  register() {
    this.authService.register(this.model).subscribe(() => {
      console.log('registration successful');
    }, err => {
      console.log(err);
    });
  }

  cancel() {
    this.cancelRegister.emit(false);
    console.log('cancelled');
  }
}
