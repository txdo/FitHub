import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  constructor(private authService: AuthService) {}

  name: FormControl<any> = new FormControl('');
  username: FormControl<any> = new FormControl('');
  password: FormControl<any> = new FormControl('');
  repeatPassword: FormControl<any> = new FormControl('');
  profilePicture: any;
  url: any;

  changeProfilePicture(event: any): void {
    this.profilePicture = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(this.profilePicture);
    reader.onload = (_e) => {
      this.url = reader.result;
    };
  }

  removeProfilePicture(): void {
    this.url = null;
    this.profilePicture = null;
  }

  register(): void {
    this.authService.register(
      this.name.value,
      this.username.value,
      this.password.value,
      this.repeatPassword.value,
      this.profilePicture
    );
  }
}
