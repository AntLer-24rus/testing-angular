import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.scss'],
})
export class RegistrationPageComponent {
  public registrationError: string | null = null;

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

  constructor(private _authService: AuthService, private _router: Router) {}

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

  public registration() {
    if (this.form.valid) {
      const { email, password } = this.form.value as Required<
        typeof this.form.value
      >;
      this._authService.registration(email, password).subscribe({
        complete: () => {
          this._router.navigate(['/users']);
          this.form.enable();
        },
        error: (error) => {
          if (typeof error === 'string') {
            this.registrationError = error;
          }
          this.form.enable();
        },
      });
    }
  }
}
