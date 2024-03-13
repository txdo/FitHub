import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  apiUrl: string = 'http://localhost:3001';

  constructor(private http: HttpClient) {}

  getProfile(paramsId: string | null): any {
    return this.http.get(`${this.apiUrl}/userInfo/${paramsId}`, {
      withCredentials: true,
    });
  }
}
