import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WorkoutService {
  apiUrl: string = 'http://localhost:3001';

  constructor(private http: HttpClient) {}

  saveSharedWorkout(name: string | null, workout: any): void {
    const req = this.http.post(
      `${this.apiUrl}/saveSharedWorkout`,
      { name, workout },
      { withCredentials: true }
    );

    req.subscribe((data: any) => {
      console.log(data);
    });
  }
}
