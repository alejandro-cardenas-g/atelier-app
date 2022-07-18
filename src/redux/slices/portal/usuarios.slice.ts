import { createSlice, Reducer, SliceCaseReducers } from '@reduxjs/toolkit';
import { IUsers } from '../../../interfaces/redux/usuarios/reduxUsuarios.interface';
import { extraReducer } from '../../extraReducers/portal/users/users.extraReducers';

const usuariosSlice = createSlice<IStateUsers, SliceCaseReducers<IStateUsers>>({
    name: 'users',
    initialState: {
        users: [],
        isLoading: false,
        userDetail: {},
        total: 0
    },
    reducers: {
        START_LOADING: (state, action) => {
            state.isLoading = true
        },
        FINISH_LOADING: (state, action) => {
            state.isLoading = false
        },
        SET_USERS: (state, action) => {
            state.users = action.payload;
        }
    },
    extraReducers: extraReducer
});

export const usuariosReducer:Reducer<IStateUsers> = usuariosSlice.reducer;

export const {
    SET_USERS
} = usuariosSlice.actions;

export interface IStateUsers {
    users: IUsers[];
    isLoading: boolean;
    userDetail: Object;
    total: number;
}
