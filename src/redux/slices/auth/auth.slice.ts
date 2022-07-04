import { createSlice, Reducer, SliceCaseReducers } from '@reduxjs/toolkit'
import { TYPE_SESSION, TYPE_USER } from '../../../locales/auth/auth.locales';

const authSlice = createSlice<IState, SliceCaseReducers<IState>>({
    name: 'auth',
    initialState: {
        loading: false,
        isLogged: true,
        session_type: 1,
        type: 1
    },
    reducers: {
        SET:(state,action) => {
            console.log(action.payload)
            state.loading = !state.loading
        },
    }
});

export const authReducer:Reducer<IState> = authSlice.reducer

export const { SET } = authSlice.actions;

interface IState {
    loading: boolean;
    isLogged: boolean;
    session_type: TYPE_SESSION;
    type: TYPE_USER;
}