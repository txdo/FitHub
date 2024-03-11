import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { setIsLoggedIn } from '../state/auth/auth.actions';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiUrl: string = 'http://localhost:3001';

  constructor(
    private http: HttpClient,
    private store: Store,
    private router: Router
  ) {}

  register(
    name: any,
    username: any,
    password: any,
    repeatPassword: any,
    profilePicture: any
  ): void {
    const names: string[] = name.split(' ');

    const formData: FormData = new FormData();
    formData.append('firstName', names[0]);
    formData.append('lastName', names[1]);
    formData.append('username', username);
    formData.append('password', password);
    formData.append('repeatPassword', repeatPassword);
    formData.append('profilePicture', profilePicture);

    const req = this.http.post(`${this.apiUrl}/register`, formData, {
      withCredentials: true,
    });

    req.subscribe((data: any) => {
      if (data.message === 'User created successfully') {
        this.store.dispatch(setIsLoggedIn({ bool: true }));
        this.router.navigate(['/']);
      }
    });
  }

  login(username: any, password: any): void {
    const req = this.http.post(
      `${this.apiUrl}/login`,
      {
        username,
        password,
      },
      {
        withCredentials: true,
      }
    );

    req.subscribe((data: any) => {
      console.log(data);
      if (data.message === 'Logged in successfully') {
        this.store.dispatch(setIsLoggedIn({ bool: true }));
        this.router.navigate(['/']);
      }
    });
  }

  isLoggedIn(): void {
    const req = this.http.get(`${this.apiUrl}/isLoggedIn`, {
      withCredentials: true,
    });

    req.subscribe((data: any) => {
      if (data.isLoggedIn) {
        this.store.dispatch(setIsLoggedIn({ bool: true }));
      }
    });
  }

  logout(): void {
    const req = this.http.get(`${this.apiUrl}/logout`, {
      withCredentials: true,
    });

    req.subscribe((data: any) => {
      if (data.message === 'User logged out successfully') {
        this.store.dispatch(setIsLoggedIn({ bool: false }));
        this.router.navigate(['/login']);
      }
    });
  }
}
