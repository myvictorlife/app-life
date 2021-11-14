
import { Action, createAction, props, State } from '@ngrx/store';
import { LANG } from 'config/lang';
import { User } from './user.model';

export const load = createAction('[USER] Load');
export const set = createAction(
    '[USER] Set User',
    props<{ user: User }>()
);
export const loadSuccess = createAction('[USER] Load Success');
export const changeLang = createAction(
    '[USER] Change Language',
    props<{ language: string }>()
);
