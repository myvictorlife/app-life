/*
 * File: login.page.spec.ts
 * Project: LIFE
 * Created: Wednesday, 17th November 2021 9:33:19 pm
 * Last Modified: Saturday, 27th November 2021 8:13:31 am
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
import { provideMockStore } from '@ngrx/store/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { ReplaySubject } from 'rxjs';

describe('LoginPage', () => {
  let component: LoginPage;
  let service: AuthService;
  let fixture: ComponentFixture<LoginPage>;
  let angularFireAuth: AngularFireAuth;
  let actions: ReplaySubject<any>;

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
        provideMockActions(() => actions),
        { provide: AngularFireAuth, useValue: mockAngularFireAuth },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginPage);
    component = fixture.componentInstance;
    service = TestBed.inject(AuthService);
    angularFireAuth = TestBed.inject(AngularFireAuth);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
