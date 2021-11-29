/*
 * File: health.effects.spec.ts
 * Project: LIFE
 * Created: Sunday, 28th November 2021 9:05:01 pm
 * Last Modified: Monday, 29th November 2021 11:29:12 pm
 * Copyright © 2021 My Custom Life
 */

import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of } from 'rxjs';
import { healthActions } from '@life-store/health/health.actions';
import { Health } from '@life-store/models/health.model';
import { cold, hot } from 'jasmine-marbles';
import { HealthEffects } from './health.effects';
import { HealthService } from '@life-service/health/health.service';
import { HttpClientModule } from '@angular/common/http';
import { Action } from '@ngrx/store';

describe('HealthEffects', () => {
    let healthEffects: HealthEffects;
    let actions$ = new Observable<Action>();
    let healthService: HealthService;
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [],
            providers: [
                HealthEffects,
                HealthService,
                provideMockActions(() => actions$)
            ],
            imports: [
                HttpClientModule,
            ]
        });
        healthEffects = TestBed.inject(HealthEffects);
        healthService = TestBed.inject(HealthService);
    });

    it('should be created', () => {
        expect(healthEffects).toBeTruthy();
    });
    
    it('should return an Health Info, on success', () => {
        // set up the initial action that triggers the effect
        const healthInfo = { appName: 'Teste', version: '0.0.1' } as Health;
        const healthActionGetInfo = healthActions.getInfo();
        const outcome = healthActions.getInfoSuccess({ health: healthInfo });
        
        // set up our action list
        actions$ = hot('-a', { a: healthActionGetInfo });

        const response = cold('-a|', { a: healthInfo });
        jest.spyOn(healthService, 'getInfo')
            .mockImplementation(() => (response));

        const expected = cold('--b', { b: outcome });
        expect(healthEffects.healthInfo$).toBeObservable(expected);
    });

    it('should return an Health Info, on failed', () => {
        // set up the initial action that triggers the effect
        const healthInfo = {};
        const healthActionGetInfo = healthActions.getInfo();
        const outcome = healthActions.getInfoFailed();
        
        // set up our action list
        actions$ = hot('-a', { a: healthActionGetInfo });

        const response = cold('-#|', { a: healthInfo });
        jest.spyOn(healthService, 'getInfo')
            .mockImplementation(() => (response));

        const expected = cold('--(b|)', { b: outcome });
        expect(healthEffects.healthInfo$).toBeObservable(expected);
    });

});