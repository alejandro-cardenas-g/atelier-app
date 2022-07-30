import { createSlice, Reducer, SliceCaseReducers } from '@reduxjs/toolkit'
import { TYPE_SESSION, TYPE_USER } from '../../../locales/auth/auth.locals';

const authSlice = createSlice<IStateAuth, SliceCaseReducers<IStateAuth>>({
    name: 'auth',
    initialState: {
        loading: false,
        isLogged: true,
        session_type: 1,
        type: 1
    },
    reducers: {
        SET:(state,action) => {
            state.loading = !state.loading
        },
    }
});

export const authReducer:Reducer<IStateAuth> = authSlice.reducer

export const { SET } = authSlice.actions;

export interface IStateAuth {
    loading: boolean;
    isLogged: boolean;
    session_type: TYPE_SESSION;
    type: TYPE_USER;
}