import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthService } from 'src/app/services/auth.service';
import { selectIsLoggedIn } from 'src/app/state/auth/auth.selectors';

type User = {
  name: string;
  age: number;
};

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private store: Store, private authService: AuthService) {}

  isLoggedIn: boolean = false;

  ngOnInit(): void {
    this.store
      .select(selectIsLoggedIn)
      .subscribe((data) => (this.isLoggedIn = data));
  }

  logout(): void {
    this.authService.logout();
  }
}
