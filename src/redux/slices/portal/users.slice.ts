import { createSlice, Reducer, SliceCaseReducers } from '@reduxjs/toolkit';
import { EUserDetailSection, IUserDetail, IUsers } from '../../../interfaces/redux/usuarios/reduxUsuarios.interface';
import { extraReducer } from '../../extraReducers/portal/users/users.extraReducers';

const usersSlice = createSlice<IStateUsers, SliceCaseReducers<IStateUsers>>({
    name: 'users',
    initialState: {
        users: [],
        isLoading: false,
        total: null,
        detailSection: null,
        userDetail: null
    },
    reducers: {
        SET_USERS: (state, action) => {
            state.users = action.payload;
        },
        SET_USER_DETAIL_SECTION: (state, action: {payload: EUserDetailSection | null}) => {
            state.detailSection = action.payload;
        },
    },
    extraReducers: extraReducer
});

export const usuariosReducer:Reducer<IStateUsers> = usersSlice.reducer;

export const {
    SET_USERS,
    SET_ACTIVE_USER,
    SET_USER_DETAIL_SECTION
} = usersSlice.actions;

export interface IStateUsers {
    users: IUsers[];
    isLoading: boolean;
    total: number | null;
    detailSection: EUserDetailSection | null;
    userDetail: IUserDetail | null;
}