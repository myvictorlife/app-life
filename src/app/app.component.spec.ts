/*
 * File: app.component.spec.ts
 * Project: LIFE
 * Created: Saturday, 27th November 2021 2:22:42 pm
 * Last Modified: Saturday, 27th November 2021 2:43:44 pm
 * Copyright © 2021 My Custom Life
 */


import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

import { AppComponent } from './app.component';
import * as fromUserSelectors from '@life-store/user/user.selectors';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { Observable, of } from 'rxjs';
import { User } from '@life-store/models/user.model';

class FakeLoader implements TranslateLoader {
  getTranslation(lang: string): Observable<any> {
    return of({ test: 'This is a Fake translate' });
  }
}
describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
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
  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [AppComponent],
        schemas: [CUSTOM_ELEMENTS_SCHEMA],
        imports: [
          TranslateModule.forRoot({
            loader: {
              provide: TranslateLoader,
              useClass: FakeLoader,
            },
          }),
        ],
        providers: [provideMockStore({})],
      }).compileComponents();
    }),
  );

  it('should create the app', () => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.debugElement.componentInstance;
    store = TestBed.inject(MockStore);
    expect(component).toBeTruthy();
  });

  it('should init the app', () => {
    const listenChangeLanguageSpy = jest.spyOn(component as any, 'listenChangeLanguage');
    const fixFirebaseAuthSDK9DoesNotWorkOnIOS = jest.spyOn(component as any, 'fixFirebaseAuthSDK9DoesNotWorkOnIOS');
    component.ngOnInit();
    expect(listenChangeLanguageSpy).toHaveBeenCalled();
    expect(fixFirebaseAuthSDK9DoesNotWorkOnIOS).toHaveBeenCalled();
  });

  it('should init the app', () => {
    const listenChangeLanguageSpy = jest.spyOn(component as any, 'listenChangeLanguage');
    const fixFirebaseAuthSDK9DoesNotWorkOnIOS = jest.spyOn(component as any, 'fixFirebaseAuthSDK9DoesNotWorkOnIOS');
    component.ngOnInit();
    expect(listenChangeLanguageSpy).toHaveBeenCalled();
    expect(fixFirebaseAuthSDK9DoesNotWorkOnIOS).toHaveBeenCalled();
  });

  it('should listen change language from Store', () => {
    jest.spyOn(store, 'select').mockImplementation(() => of('pt'));
    component.listenChangeLanguage();
    const selector = fromUserSelectors.selectLanguage;
    expect(store.select).toHaveBeenCalledWith(selector);
    expect(component.language$).toBeTruthy();
  });
  // TODO: add more tests!
});
