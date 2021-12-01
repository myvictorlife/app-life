/*
 * File: loading.selectors.spec.ts
 * Project: LIFE
 * Created: Wednesday, 1st December 2021 7:25:22 am
 * Last Modified: Wednesday, 1st December 2021 9:21:34 pm
 * Copyright © 2021 My Custom Life
 */

import * as fromLoading from '../reducers/loading.reducers';
import * as fromLoadingSelectors from '../selectors/loading.selectors';
describe('LoadingSelectors', () => {
    const initialState: fromLoading.State = {
        active: 0, actionsInProgress: []
    };

    it('should select the default state', () => {
        expect(fromLoadingSelectors.selectLoadingState.projector(initialState)).toEqual(
          initialState,
        );
    });

    it('should select loading active', () => {
        const initialStateActive: fromLoading.State = {
            active: 1, actionsInProgress: ['[Test] Unit Test']
        };
        expect(fromLoadingSelectors.selectLoadingState.projector(initialStateActive).active).toEqual(
          1
        );
    });
});
