/*
 * File: login.page.spec.ts
 * Project: LIFE
 * Created: Wednesday, 17th November 2021 9:33:19 pm
 * Last Modified: Sunday, 28th November 2021 12:19:43 pm
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
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { environment } from 'environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { Router } from '@angular/router';
import { authActions } from '@life-store/auth/auth.actions';
import { TestScheduler } from 'rxjs/testing';

describe('LoginPage', () => {
  let component: LoginPage;
  let service: AuthService;
  let fixture: ComponentFixture<LoginPage>;
  let angularFireAuth: AngularFireAuth;
  let router: Router;
  let store: MockStore;
  let testScheduler: TestScheduler;

  const mockAngularFireAuth: any = {};

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginPage],
      imports: [
        IonicModule.forRoot(),
        ReactiveFormsModule,
        ComponentsModule,
        RouterTestingModule,
        HttpClientModule,
        AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFireAuthModule,
      ],
      providers: [
        LoginPage,
        provideMockStore({}),
        { provide: AngularFireAuth, useValue: mockAngularFireAuth },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginPage);
    component = fixture.componentInstance;
    service = TestBed.inject(AuthService);
    angularFireAuth = TestBed.inject(AngularFireAuth);
    router = TestBed.inject(Router);
    store = TestBed.inject(MockStore);
    fixture.detectChanges();
  });

  beforeEach(() => {
    testScheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should do login', () => {
    jest.spyOn(store, 'dispatch').mockImplementation();
    component.loginForm.setValue({
      email: 'test@my-custom-life.com',
      password: '11223344'
    });
    component.doLogin();
    expect(store.dispatch).toHaveBeenCalledWith(
      authActions.signInWithEmailAndPassword({
        email: 'test@my-custom-life.com',
        password: '11223344',
      })
    );
  });

});
