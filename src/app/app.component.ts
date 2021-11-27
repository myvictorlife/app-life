/*
 * File: app.component.ts
 * Project: LIFE
 * Created: Monday, 8th November 2021 7:38:42 pm
 * Last Modified: Saturday, 27th November 2021 11:09:45 am
 * Copyright © 2021 My Custom Life
 */

import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import * as fromUserSelectors from '@life-store/user/user.selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'life-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  language$: Observable<string>;
  constructor(private store: Store, private translate: TranslateService) {
    this.translate.addLangs(['en', 'pt', 'es']);
    translate.setDefaultLang('pt');
    this.listenChangeLanguage();
  }

  ngOnInit() {
    this.listenChangeLanguage();
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
}
