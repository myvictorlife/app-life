import { Health } from '@life-store/models/health.model';
import { createAction, props } from '@ngrx/store';

export const healthActions = {
  getInfo: createAction('[Health API] Get Health Info'),
  getInfoSuccess: createAction('[Health API] Health Loaded Success', props<{ health: Health }>()),
};
