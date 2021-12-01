/*
 * File: app.component.ts
 * Project: LIFE
 * Created: Monday, 8th November 2021 7:38:42 pm
 * Last Modified: Wednesday, 1st December 2021 11:33:47 pm
 * Copyright © 2021 My Custom Life
 */

import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import * as fromUserSelectors from '@life-store/user/user.selectors';
import { Observable } from 'rxjs';
import { Capacitor } from '@capacitor/core';
import { initializeApp } from 'firebase/app';
import { indexedDBLocalPersistence, initializeAuth } from 'firebase/auth';
import { environment } from 'environments/environment';
import { getFirestore, Firestore } from 'firebase/firestore';
import {SplashScreen} from '@capacitor/splash-screen';

@Component({
  selector: 'life-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  language$: Observable<string>;
  firestore: Firestore;
  constructor(private store: Store, private translate: TranslateService) {
    this.translate.addLangs(['en', 'pt', 'es']);
    translate.setDefaultLang('pt');
  }

  ngOnInit() {
    this.hideSplashScreeen();
    this.listenChangeLanguage();
    this.fixFirebaseAuthSDK9DoesNotWorkOnIOS();
  }

  private hideSplashScreeen(): void {
    setTimeout(() => {
      SplashScreen.hide();
    }, 2000);
  }

  listenChangeLanguage() {
    this.language$ = this.store.select(fromUserSelectors.selectLanguage);
    this.language$.subscribe((language) => {
      this.setLanguage(language);
    });
  }

  setLanguage(language: string) {
    this.translate.setDefaultLang(language);
  }
  private fixFirebaseAuthSDK9DoesNotWorkOnIOS() {
    // https://github.com/firebase/firebase-js-sdk/issues/5552
    const app = initializeApp(environment.firebaseConfig);
    if (Capacitor.isNativePlatform) {
      initializeAuth(app, {
        persistence: indexedDBLocalPersistence
      });
    }
    this.firestore = getFirestore(app);
  }
}
