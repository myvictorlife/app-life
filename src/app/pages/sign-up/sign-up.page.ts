import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PasswordValidator } from '@life-shared/validators/password.validator';

@Component({
  selector: 'life-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {
  signupForm: FormGroup;
  matchingPasswordsGroup: FormGroup;

  hasVerifiedEmail = true;
  sentTimestamp;

  isLoading = false;

  validationMessages = {
    email: [
      { type: 'required', message: 'Email is required.' },
      { type: 'pattern', message: 'Enter a valid email.' },
    ],
    password: [
      { type: 'required', message: 'Password is required.' },
      { type: 'minlength', message: 'Password must be at least 5 characters long.' },
    ],
    confirmPassword: [{ type: 'required', message: 'Confirm password is required' }],
    matchingPasswords: [{ type: 'areNotEqual', message: 'Password mismatch' }],
  };
  constructor() {}

  ngOnInit() {
    this.matchingPasswordsGroup = new FormGroup(
      {
        password: new FormControl(
          '',
          Validators.compose([Validators.minLength(5), Validators.required]),
        ),
        confirmPassword: new FormControl('', Validators.required),
      },
      (formGroup: FormGroup) => PasswordValidator.areNotEqual(formGroup),
    );

    this.signupForm = new FormGroup({
      email: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'),
        ]),
      ),
      matchingPasswords: this.matchingPasswordsGroup,
    });
  }

  doSignup() {
    const email = this.signupForm.value.email;
    const password = this.signupForm.value.matchingPasswords.password;
    const credentials = { email, password };
    console.log(credentials);
    // dispatch actions
  }
}
