/*
 * File: core.module.ts
 * Project: LIFE
 * Created: Thursday, 25th November 2021 4:57:17 pm
 * Last Modified: Saturday, 27th November 2021 10:19:59 am
 * Copyright © 2021 My Custom Life
 */

import { NgModule } from '@angular/core';
import { CoreComponent } from '../core.component';

import { EffectsModule } from '@ngrx/effects';
import { environment } from 'environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { coreEffectsAtBootstrap } from '../core.effects';
import { TranslateModule } from '@ngx-translate/core';
@NgModule({
  declarations: [CoreComponent],
  imports: [
    EffectsModule.forFeature(coreEffectsAtBootstrap),
    !environment.production ? StoreDevtoolsModule.instrument({ maxAge: 10 }) : [],
  ],
  exports: [TranslateModule],
})
export class CoreModule {}
