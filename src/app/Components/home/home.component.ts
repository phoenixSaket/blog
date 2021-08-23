import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from '../services/login-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  private username: string = '';
  private password: string = '';
  constructor(
    private loginService: LoginServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    let id = localStorage.getItem('id');

    if (!!id) {
      this.router.navigate(['/home']);
    }
  }

  getValue(string: string, event: string) {
    if (typeof event === 'string')
      switch (string) {
        case 'username':
          this.username = event;
          break;
        case 'password':
          this.password = event;
          break;
        default:
          break;
      }
  }

  checkLogin() {
    this.loginService.checkLogin(this.username, this.password).subscribe(
      (data: any) => {
        console.log('Login Successful : ', data);
        if (data.message) {
          if (data.id) {
            this.loginService.setId(data.id);
            localStorage.setItem('id', data.id);
            this.router.navigate(['/home']);
          } else {
            console.log('Error : ', 'No ID found');
          }
        }
      },
      (err: HttpErrorResponse) => {
        console.log('Error : ', err);
      }
    );
  }
}
