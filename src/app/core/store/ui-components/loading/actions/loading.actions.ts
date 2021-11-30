/*
 * File: loading.actions.ts
 * Project: LIFE
 * Created: Tuesday, 30th November 2021 3:59:31 pm
 * Last Modified: Tuesday, 30th November 2021 7:13:19 pm
 * Copyright © 2021 My Custom Life
 */

import { createAction, props } from '@ngrx/store';

export const loadingActions = {
    showLoading: createAction(
        '[UI] Show loading',
        props<{ payload: any }>()
    ),
    hideLoading: createAction(
        '[UI] Hide loading',
        props<{ payload: any }>()
    )
};
