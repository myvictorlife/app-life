import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from '@life-store/user/user.model';
import * as fromUserSelectors from '../core/store/user/user.selectors';
import { userActions } from '../core/store/user/user.actions';

@Component({
  selector: 'life-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private store: Store) {
  }

  getUser(): Observable<User> {
    return this.store.select(fromUserSelectors.selectUser);
  }

  getLanguage(): Observable<string> {
    return this.store.select(fromUserSelectors.selectLanguage);
  }

  addUser() {
    const user = {
      firstName: 'Victor Cesar',
      lastName: 'Peixoto Barbosa',
      email: 'victorcmggg@gmail.com'
    } as User;
    this.store.dispatch(userActions.setUser({ user }));
  }


  setLanguage(language: string) {
    this.store.dispatch(userActions.changeLang({language}));
  }

}
