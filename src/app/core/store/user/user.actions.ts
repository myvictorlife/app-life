
import { createAction, props } from '@ngrx/store';
import { User } from './user.model';

export const load = createAction('[USER] Load');
export const setUser = createAction(
    '[USER] Set User',
    props<{ user: User }>()
);
export const loadSuccess = createAction('[USER] Load Success');
export const changeLang = createAction(
    '[USER] Change Language',
    props<{ language: string }>()
);
