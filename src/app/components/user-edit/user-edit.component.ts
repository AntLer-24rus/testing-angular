import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TUser, TEditUser } from 'src/app/types/user';

type TForm<T> = {
  [Key in keyof T]: FormControl<T[Key]>;
};

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss'],
})
export class UserEditComponent implements OnInit {
  @Input() user!: TUser;

  @Output() userUpdate = new EventEmitter<TEditUser>();

  public updating = false;

  public form = new FormGroup<TForm<TEditUser>>({
    first_name: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.pattern(/^[A-ZА-Я]/)],
    }),
    last_name: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.pattern(/^[A-ZА-Я]/)],
    }),
    email: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.email],
    }),
  });

  get firstNameHasError() {
    const control = this.form.controls.first_name;
    return control.invalid && (control.dirty || control.touched);
  }

  get firstNameHasRequiredError() {
    const control = this.form.controls.first_name;
    return (
      control.invalid &&
      (control.dirty || control.touched) &&
      // eslint-disable-next-line dot-notation
      control.errors?.['required']
    );
  }

  get firstNameHasCapitalizeError() {
    const control = this.form.controls.first_name;
    return (
      control.invalid &&
      (control.dirty || control.touched) &&
      // eslint-disable-next-line dot-notation
      control.errors?.['pattern']
    );
  }

  get lastNameHasError() {
    const control = this.form.controls.last_name;
    return control.invalid && (control.dirty || control.touched);
  }

  get lastNameHasRequiredError() {
    const control = this.form.controls.last_name;
    return (
      control.invalid &&
      (control.dirty || control.touched) &&
      // eslint-disable-next-line dot-notation
      control.errors?.['required']
    );
  }

  get lastNameHasCapitalizeError() {
    const control = this.form.controls.last_name;
    return (
      control.invalid &&
      (control.dirty || control.touched) &&
      // eslint-disable-next-line dot-notation
      control.errors?.['pattern']
    );
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

  public submit() {
    if (this.form.valid) {
      this.updating = true;
      this.userUpdate.emit(this.form.value as Required<typeof this.form.value>);
    }
  }

  ngOnInit(): void {
    this.form.reset({
      ...this.user,
    });
  }
}
