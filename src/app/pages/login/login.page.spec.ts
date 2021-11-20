/*
 * File: login.page.spec.ts
 * Project: LIFE
 * Created: Wednesday, 17th November 2021 9:33:19 pm
 * Last Modified: Saturday, 20th November 2021 7:02:43 pm
 * Copyright © 2021 My Custom Life
 */

import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ComponentsModule } from '../../components/components.module';
import { AuthService } from '@life-service/auth/auth.service';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginPage } from './login.page';
import { HttpClientModule } from '@angular/common/http';

describe('LoginPage', () => {
  let component: LoginPage;
  let service: AuthService;
  let fixture: ComponentFixture<LoginPage>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [LoginPage],
        imports: [
          IonicModule.forRoot(),
          ReactiveFormsModule,
          ComponentsModule,
          RouterTestingModule,
          HttpClientModule,
        ],
        providers: [LoginPage],
      }).compileComponents();

      fixture = TestBed.createComponent(LoginPage);
      component = fixture.componentInstance;
      service = TestBed.inject(AuthService);
      fixture.detectChanges();
    }),
  );

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should do login', () => {
    const loginServiceSpy = jest.spyOn(service, 'doLogin');
    const user = { email: 'life@life.com', password: '123' };
    component.loginForm.get('email').setValue(user.email);
    component.loginForm.get('password').setValue(user.password);
    component.doLogin();
    expect(loginServiceSpy).toHaveBeenCalledWith(user);
  });
});
