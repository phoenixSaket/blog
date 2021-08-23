import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginServiceService {
  private http: HttpClient;
  loginObservable: Observable<any>;
  private httpLoginUrl = 'http://localhost:8000/api/login/';
  private httpCreateAccountUrl = 'http://localhost:8000/api/addUser/';
  private id: number = 0;

  constructor(http: HttpClient) {
    this.http = http;
  }

  public checkLogin(username: string, password: string): Observable<any> {
    let user = { username: username, password: password };
    return this.http.post(this.httpLoginUrl, { user: user });
  }

  public createAccount(data: any): Observable<any> {
    const name = data.name;
    const username = data.username;
    const email = data.email;
    const password = data.password;

    let user = {
      name: name,
      username: username,
      email: email,
      password: password,
      isOnline: 1,
      lastLoggedOut: 0,
    };

    return this.http.post(this.httpCreateAccountUrl, { user: user });
  }

  public setId(id: number) {
    this.id = id;
  }

  public getId(): number {
    return this.id;
  }
}
