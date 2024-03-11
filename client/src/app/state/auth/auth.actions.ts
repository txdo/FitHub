import { createAction, props } from '@ngrx/store';

export const setIsLoggedIn = createAction(
  '[IsLoggedIn] Set isLoggedIn',
  props<{ bool: boolean }>()
);
