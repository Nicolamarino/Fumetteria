import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { UserDTO } from 'src/app/model/package/DTO/user-dto';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email: string;
  password: string;
  loginForm;
  isUnchanged: boolean = true;
  constructor(private fb: FormBuilder, private loginService: LoginService) {
    this.loginForm = this.fb.group({
      email: ['', [   Validators.email,
                      Validators.required]],
      password: ['', [Validators.pattern,
                      Validators.required,
                      Validators.minLength(4)]]
    })
  }
  ngOnInit() {
  }
  autenticazione() {
    this.loginService
      .login(this.email, this.password).subscribe(resp => {
        const user: UserDTO = resp;
        console.log(user)
      });
  }

}
