
import { createAction, props } from '@ngrx/store';
import { User } from './user.model';

export const userActions = {
    load: createAction('[USER] Load'),

    setUser: createAction(
        '[USER] Set User',
        props<{ user: User }>()
    ),

    loadSuccess: createAction('[USER] Load Success'),

    changeLang: createAction(
        '[USER] Change Language',
        props<{ language: string }>()
    )
};
