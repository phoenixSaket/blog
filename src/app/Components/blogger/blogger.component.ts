import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../services/login-service.service';

@Component({
  selector: 'app-blogger',
  templateUrl: './blogger.component.html',
  styleUrls: ['./blogger.component.css'],
})
export class BloggerComponent implements OnInit {
  constructor(private loginService: LoginServiceService) {}

  public userData: any = {};
  public blogs: any = [];
  public privateBlogs: any = [];

  ngOnInit(): void {
    this.loginService.getUser().subscribe(
      (data) => {
        // console.log('Success : ', data);
        this.userData = data;
        console.log('Success : ', this.userData);
      },
      (err) => {
        console.log('Error : ', err);
      }
    );

    this.loginService.getBlogs().subscribe(
      (data) => {
        console.log('Success', data);
        this.blogs = data.blogs;
        this.privateBlogs = data.privateBlogs;
      },
      (err) => {
        console.log('Error', err);
      }
    );
  }
}
