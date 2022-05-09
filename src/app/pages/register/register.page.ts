import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  loginForm;
  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      uname: ['', Validators.required],
      email:['', Validators.email],
      password: ['', [Validators.pattern,
                      Validators.minLength(8),
                      Validators.maxLength(16)]]
    })
  }
  ngOnInit() {
  }

}
