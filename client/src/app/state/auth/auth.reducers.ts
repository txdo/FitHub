import { createReducer, on } from '@ngrx/store';
import { setIsLoggedIn } from './auth.actions';

export interface AuthState {
  isLoggedIn: boolean;
}

export const initialState: AuthState = {
  isLoggedIn: false,
};

export const authReducer = createReducer(
  initialState,
  on(setIsLoggedIn, (state, { bool }) => {
    return { ...state, isLoggedIn: bool };
  })
);
