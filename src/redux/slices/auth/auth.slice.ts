import { createSlice, Reducer, SliceCaseReducers } from '@reduxjs/toolkit'
import { IAuthDetails } from '../../../interfaces/auth/authLogin.interface';
import { TYPE_SESSION, TYPE_USER } from '../../../locales/auth/auth.locals';
import { extraReducer } from '../../extraReducers/auth/auth.extraReducer';

const authSlice = createSlice<IStateAuth, SliceCaseReducers<IStateAuth>>({
    name: 'auth',
    initialState: {
        loading: false,
        isLogged: false,
        session_type: 1,
        user: null,
        checked: null
    },
    reducers: {
        SET:(state,action) => {
            state.loading = !state.loading
        },
        ON_FORBIDDEN: (state, action) => {
            localStorage.removeItem('token');
            state.checked = false;
            state.isLogged = false;
            state.user = null;
            state.loading = false;
        },
        STABLISH_USER_SESSION: (state, action) => {
            state.session_type = action.payload;
        },
        LOGOUT: (state, action) => {
            localStorage.removeItem('token');
            state.checked = false;
            state.isLogged = false;
            state.user = null;
        }
    },
    extraReducers: extraReducer
});

export const authReducer:Reducer<IStateAuth> = authSlice.reducer

export const { 
    SET,
    ON_FORBIDDEN,
    STABLISH_USER_SESSION,
    LOGOUT
} = authSlice.actions;

export interface IStateAuth {
    loading: boolean;
    isLogged: boolean;
    session_type: TYPE_SESSION;
    user: null | IAuthDetails;
    checked: boolean | null;
}