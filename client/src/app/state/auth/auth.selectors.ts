import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AuthState } from './auth.reducers';

export const selectIsLoggedInState = createFeatureSelector<AuthState>('auth');

export const selectIsLoggedIn = createSelector(
  selectIsLoggedInState,
  (state) => state.isLoggedIn
);
