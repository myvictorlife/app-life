import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from '@life-store/user/user.model';
import * as fromRoot from '@life-store';
import { changeLang, setUser} from '@life-store/user/user.actions';
import { selectLanguage, selectUser } from '@life-store/user/user.selectors';

@Component({
  selector: 'life-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private store: Store) {
  }

  getUser(): Observable<User> {
    return this.store.select(selectUser);
  }

  getLanguage(): Observable<string> {
    return this.store.select(selectLanguage);
  }

  addUser() {
    const user = {
      firstName: 'Victor Cesar',
      lastName: 'Peixoto Barbosa',
      email: 'victorcmggg@gmail.com'
    } as User;
    this.store.dispatch(setUser({ user }));
  }


  setLanguage(language: string) {
    this.store.dispatch(changeLang({language}));
  }

}
