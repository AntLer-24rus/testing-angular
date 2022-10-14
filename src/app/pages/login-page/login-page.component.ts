import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  public loginError: string | null = null;

  public form = new FormGroup({
    email: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.email],
    }),
    password: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(6)],
    }),
  });

  private _to = '/users';

  constructor(private _authService: AuthService, private _router: Router) {}

  ngOnInit(): void {
    const { from } = window.history.state as { from?: string };
    if (from) {
      this._to = from;
    }
  }

  get emailHasError() {
    const control = this.form.controls.email;
    return control.invalid && (control.dirty || control.touched);
  }

  get emailHasRequiredError() {
    const control = this.form.controls.email;
    return (
      control.invalid &&
      (control.dirty || control.touched) &&
      // eslint-disable-next-line dot-notation
      control.errors?.['required']
    );
  }

  get emailHasEmailError() {
    const control = this.form.controls.email;
    return (
      control.invalid &&
      (control.dirty || control.touched) &&
      // eslint-disable-next-line dot-notation
      control.errors?.['email']
    );
  }

  get passwordHasErrors() {
    const control = this.form.controls.password;
    return control.invalid && (control.dirty || control.touched);
  }

  get passwordHasRequiredError() {
    const control = this.form.controls.password;
    return (
      control.invalid &&
      (control.dirty || control.touched) &&
      // eslint-disable-next-line dot-notation
      control.errors?.['required']
    );
  }

  get passwordHasLengthError() {
    const control = this.form.controls.password;
    return (
      control.invalid &&
      (control.dirty || control.touched) &&
      // eslint-disable-next-line dot-notation
      !!control.errors?.['minlength']
    );
  }

  public login() {
    if (this.form.valid) {
      const { email, password } = this.form.value as Required<
        typeof this.form.value
      >;
      this.form.disable();
      this._authService.login(email, password).subscribe({
        complete: () => {
          this._router.navigate([this._to]);
          this.form.enable();
        },
        error: (error) => {
          if (typeof error === 'string') {
            this.loginError = error;
          }
          this.form.enable();
        },
      });
    }
  }
}
