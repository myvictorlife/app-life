import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from '@life-store/user/user.model';
import * as fromRoot from '@life-store';
import * as fromUserActions from '@life-store/user/user.actions';

@Component({
  selector: 'life-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private store: Store) {
  }

  getUser(): Observable<User> {
    return this.store.select(fromRoot.selectUser);
  }

  getLanguage(): Observable<string> {
    return this.store.select(fromRoot.selectLanguage);
  }

  addUser() {
    console.log('addUser on the Store');
    const user = {
      firstName: 'Victor Cesar',
      lastName: 'Peixoto Barbosa',
      email: 'victorcmggg@gmail.com'
    } as User;
    this.store.dispatch(fromUserActions.set({user}));
  }

  setLanguage(language: string) {
    console.log('addUser on the Store');
    this.store.dispatch(fromUserActions.changeLang({language}));
  }

}
