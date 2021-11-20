import { NgModule } from '@angular/core';
import { CoreComponent } from '../core.component';
import { EffectsModule } from '@ngrx/effects';
import { HealthEffects } from '@life-store/health/health.effects';
import { StoreModule } from '@ngrx/store';

import { metaReducers, reducers } from '@life-store';
import { environment } from 'environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [CoreComponent],
  imports: [
    StoreModule.forRoot(reducers, {
      metaReducers,
    }),
    !environment.production ? StoreDevtoolsModule.instrument({ maxAge: 10 }) : [],
    EffectsModule.forRoot([HealthEffects]),
  ],
})
export class CoreModule {}
