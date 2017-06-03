import { CustomValidator } from './../../validators/custom.validator';
import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html'
})
export class LoginPageComponent implements OnInit {

  public form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      email: ['', Validators.compose([
        Validators.minLength(5),
        Validators.maxLength(160),
        Validators.required,
        CustomValidator.EmailValidator
      ])],
      password: ['', Validators.compose([
        Validators.minLength(5),
        Validators.maxLength(20),
        Validators.required
      ])]
    });
   }

  ngOnInit() {
  }

  checkEmail() {
    this.form.controls['email'].disable;
    document.getElementById('emailControl').classList.add('is-loading');
    setTimeout(() => {
      this.form.controls['email'].enable;
      document.getElementById('emailControl').classList.remove('is-loading');
      console.log(this.form.controls['email'].value) ;
    }, 5000);
  }

}
