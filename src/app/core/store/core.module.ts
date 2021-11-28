/*
 * File: core.module.ts
 * Project: LIFE
 * Created: Thursday, 25th November 2021 4:57:17 pm
 * Last Modified: Sunday, 28th November 2021 5:17:07 am
 * Copyright © 2021 My Custom Life
 */

import { NgModule } from '@angular/core';
import { CoreComponent } from '../core.component';

import { EffectsModule } from '@ngrx/effects';
import { coreEffectsAtBootstrap } from '../core.effects';
import { TranslateModule } from '@ngx-translate/core';
@NgModule({
  declarations: [CoreComponent],
  imports: [
    EffectsModule.forFeature(coreEffectsAtBootstrap)
  ],
  exports: [TranslateModule],
})
export class CoreModule {}
