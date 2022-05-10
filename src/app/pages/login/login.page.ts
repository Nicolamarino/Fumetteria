import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
      password:['', [ Validators.pattern,
                      Validators.required,
                      Validators.minLength(8)]]
    })
   }
  ngOnInit() {
  }

}
