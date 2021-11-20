/*
 * File: home.page.spec.ts
 * Project: LIFE
 * Created: Tuesday, 16th November 2021 11:12:43 pm
 * Last Modified: Saturday, 20th November 2021 7:02:57 pm
 * Copyright © 2021 My Custom Life
 */

import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { HomePageRoutingModule } from './home-routing.module';
import { HomePage } from './home.page';
import { User } from '@life-store/models/user.model';
import * as fromUserSelectors from '@life-store/user/user.selectors';
import { userActions } from '@life-store/user/user.actions';
import { RouterTestingModule } from '@angular/router/testing';
describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;
  let store: MockStore;
  const initialState: any = {
    user: {
      currentUser: {
        firstName: 'App',
        lastName: 'LIFE',
        email: 'victorcmggg@gmail.com',
      } as User,
      currentLang: 'en',
    },
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomePage],
      imports: [
        IonicModule.forRoot(),
        CommonModule,
        FormsModule,
        IonicModule,
        HomePageRoutingModule,
        RouterTestingModule,
      ],
      providers: [
        provideMockStore({
          initialState,
        }),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    store = TestBed.inject(MockStore);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(fixture).toBeDefined();
  });

  it('should get user', () => {
    jest.spyOn(store, 'select').mockImplementation();
    const selector = fromUserSelectors.selectUser;
    component.getUser();
    expect(store.select).toHaveBeenCalledWith(selector);
  });

  it('should get language', () => {
    jest.spyOn(store, 'select').mockImplementation();
    const selector = fromUserSelectors.selectLanguage;
    component.getLanguage();
    expect(store.select).toHaveBeenCalledWith(selector);
  });

  it('should add user', () => {
    const user = initialState.user.currentUser;
    jest.spyOn(store, 'dispatch').mockImplementation(() => {});
    store.dispatch(userActions.setUser({ user }));
    component.addUser();
    fixture.detectChanges();
    expect(store.dispatch).toHaveBeenCalledWith(userActions.setUser({ user }));
  });

  it('should set language', () => {
    const user = initialState.user.currentUser;
    jest.spyOn(store, 'dispatch').mockImplementation(() => {});
    store.dispatch(userActions.setUser({ user }));
    component.setLanguage('pt');
    fixture.detectChanges();
    expect(store.dispatch).toHaveBeenCalledWith(userActions.changeLang({ language: 'pt' }));
  });
});
