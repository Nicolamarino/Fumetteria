import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  registerForm;
  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      uname: ['', Validators.required],
      email:['', [Validators.email,Validators.required]],
      password: ['', [Validators.pattern,
                      Validators.required,
                      Validators.minLength(8)]]
    })
  }
  ngOnInit() {
  }

}
