import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm;
  constructor(private fb:FormBuilder) {
    this.loginForm= this.fb.group({
      uname:['', Validators.required],
      password:['', [Validators.pattern,
                      Validators.minLength(8),
                      Validators.maxLength(16)]]
    })
   }
  ngOnInit() {
  }

}
