import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ComponentsModule } from '../../components/components.module';
import { LoginService } from '../../shared/services/login.service';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginPage } from './login.page';

describe('LoginPage', () => {
  let component: LoginPage;
  let loginService: LoginService;
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
        ],
        providers: [LoginService],
      }).compileComponents();

      fixture = TestBed.createComponent(LoginPage);
      component = fixture.componentInstance;
      loginService = TestBed.inject(LoginService);
      fixture.detectChanges();
    }),
  );

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should do login', () => {
    const loginServiceSpy = jest.spyOn(loginService, 'login');
    const user = { email: 'life@life.com', password: '123' };
    component.loginForm.get('email').setValue(user.email);
    component.loginForm.get('password').setValue(user.password);
    component.doLogin();
    expect(loginServiceSpy).toHaveBeenCalledWith(user);
  });
});
