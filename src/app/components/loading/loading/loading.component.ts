/*
 * File: loading.component.ts
 * Project: LIFE
 * Created: Tuesday, 30th November 2021 5:57:49 pm
 * Last Modified: Thursday, 2nd December 2021 8:24:43 am
 * Copyright © 2021 My Custom Life
 */

import { Component, OnDestroy, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { selectIsLoadingSpinnerActive } from '@life-store/ui-components/loading/selectors/loading.selectors';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'life-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
})
export class LoadingComponent implements OnInit, OnDestroy {

  loading: any;
  listenerLoading$: Observable<any>;

  constructor(
    public loadingController: LoadingController,
    private store: Store
  ) { }

  ngOnInit() {
    this.listenerLoading$ = this.store.select(selectIsLoadingSpinnerActive);
    this.listenerLoading$.subscribe(async (result) => {
      if (result) {
        await this.showLoading();
      } else {
        this.hideLoading();
      }
    });
  }

  async showLoading() {
    this.loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...'
    });
    return await this.loading.present();
  }

  async hideLoading() {
    if (this.loading) {
      await this.loading.dismiss();
    }
  }

  ngOnDestroy() {
    this.hideLoading();
  }
}
