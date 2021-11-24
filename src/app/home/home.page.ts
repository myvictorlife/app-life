/*
 * File: home.page.ts
 * Project: LIFE
 * Created: Tuesday, 16th November 2021 11:12:43 pm
 * Last Modified: Tuesday, 23rd November 2021 11:16:39 pm
 * Copyright © 2021 My Custom Life
 */

import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from '@life-store/models/user.model';
import * as fromUserSelectors from '@life-store/user/user.selectors';
import { userActions } from '@life-store/user/user.actions';
import { healthActions } from '@life-store/health/health.actions';
import { Health } from '@life-store/models/health.model';
import { selectHealthInfo } from '@life-store/health/health.selectors';

@Component({
  selector: 'life-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  lifeInfo$: Observable<Health>;
  constructor(private store: Store) {}

  ngOnInit() {
    this.lifeInfo$ = this.store.select(selectHealthInfo);
  }

  getUser(): Observable<User> {
    return this.store.select(fromUserSelectors.selectUser);
  }

  getLanguage(): Observable<string> {
    return this.store.select(fromUserSelectors.selectLanguage);
  }

  addUser() {
    const user = {
      firstName: 'App',
      lastName: 'Life',
      email: '*****e@my-custom-life.com',
    } as User;
    this.store.dispatch(userActions.createUser({ user }));
  }

  setLanguage(language: string) {
    this.store.dispatch(userActions.changeLang({ language }));
  }

  getLifeInfo(): void {
    this.store.dispatch(healthActions.getInfo());
  }
}
