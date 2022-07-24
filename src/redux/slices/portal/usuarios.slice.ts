import { createSlice, Reducer, SliceCaseReducers } from '@reduxjs/toolkit';
import { IUsers } from '../../../interfaces/redux/usuarios/reduxUsuarios.interface';
import { extraReducer } from '../../extraReducers/portal/users/users.extraReducers';

const usersSlice = createSlice<IStateUsers, SliceCaseReducers<IStateUsers>>({
    name: 'users',
    initialState: {
        users: [],
        isLoading: false,
        activeUser: null,
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
        },
        SET_ACTIVE_USER: (state, action: {payload: number}) => {
            state.activeUser = action.payload;
        }
    },
    extraReducers: extraReducer
});

export const usuariosReducer:Reducer<IStateUsers> = usersSlice.reducer;

export const {
    SET_USERS,
    SET_ACTIVE_USER
} = usersSlice.actions;

export interface IStateUsers {
    users: IUsers[];
    isLoading: boolean;
    activeUser: number | null;
    total: number;
}
