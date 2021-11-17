import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../shared/services/login.service';

@Component({
  selector: 'life-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  constructor(private loginService: LoginService) {}

  ngOnInit() {}

  doLogin() {
    this.loginService.login();
  }
}
