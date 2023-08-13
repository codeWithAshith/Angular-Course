import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsernameValidators } from './username.validators';
import { AuthService } from 'src/app/services/auth.service';
import { logInUser } from 'src/app/interfaces/user.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin-form',
  templateUrl: './signin-form.component.html',
  styleUrls: ['./signin-form.component.css'],
})
export class SigninFormComponent {
  errorMessage: string = '';
  form = new FormGroup({
    username: new FormControl(
      '',
      [Validators.required, Validators.minLength(3)],
      UsernameValidators.shouldBeUnique
    ),
    password: new FormControl('', [Validators.required]),
  });

  constructor(private authService: AuthService, private router: Router) {}

  get username() {
    return this.form.get('username');
  }

  get password() {
    return this.form.get('password');
  }

  login() {
    console.log(this.form.value);
    let user: logInUser = {
      username: this.form.value.username!,
      password: this.form.value.password!,
    };

    this.authService.login(user).subscribe(
      (response) => {
        console.log(response);
        this.router.navigate(['/']);
      },
      (error) => {
        console.log(error);
        this.errorMessage = 'Invalid Credentails';
      }
    );
  }
}
