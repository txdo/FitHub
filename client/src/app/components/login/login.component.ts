import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  username: FormControl<string | null> = new FormControl('');
  password: FormControl<string | null> = new FormControl('');

  constructor(private authService: AuthService) {}

  login(): void {
    this.authService.login(this.username.value, this.password.value);
  }
}
