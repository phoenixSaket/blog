import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from '../services/login-service.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css'],
})
export class CreateAccountComponent implements OnInit {
  private name: string = '';
  private username: string = '';
  private password: string = '';
  private email: string = '';

  constructor(private loginService: LoginServiceService, private router: Router) {}

  ngOnInit(): void {}

  getValue(string: string, event: string) {
    if (typeof event === 'string')
      switch (string) {
        case 'username':
          this.username = event;
          break;
        case 'password':
          this.password = event;
          break;
        case 'name':
          this.name = event;
          break;
        case 'email':
          this.email = event;
          break;
        default:
          break;
      }
  }

  createAccount() {
    let data: any = {
      name: this.name,
      username: this.username,
      password: this.password,
      email: this.email,
    };

    this.loginService.createAccount(data).subscribe(
      (data) => {
        console.log('Account Created : ', data);
        if(data.message === "success") {
          this.router.navigate(["/"]);
        }
      },
      (err: HttpErrorResponse) => {
        console.log('Error : ', err);
      }
    );
  }
}
