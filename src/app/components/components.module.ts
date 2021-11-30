/*
 * File: components.module.ts
 * Project: LIFE
 * Created: Saturday, 20th November 2021 11:43:54 pm
 * Last Modified: Tuesday, 30th November 2021 5:59:12 pm
 * Copyright © 2021 My Custom Life
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { ShowHidePasswordComponent } from './show-hide-password/show-hide-password.component';
import { LoadingComponent } from './loading/loading/loading.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule.forRoot()],
  declarations: [
    ShowHidePasswordComponent,
    LoadingComponent
  ],
  exports: [
    ShowHidePasswordComponent,
    LoadingComponent
  ],
  entryComponents: [],
})
export class ComponentsModule {}
