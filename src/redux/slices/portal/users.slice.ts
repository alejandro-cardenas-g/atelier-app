import { createSlice, Reducer, SliceCaseReducers } from '@reduxjs/toolkit';
import { EUserDetailSection, IUserDetail, IUsers } from '../../../interfaces/redux/usuarios/reduxUsers.interface';
import { extraReducer } from '../../extraReducers/portal/users/users.extraReducers';

const usersSlice = createSlice<IStateUsers, SliceCaseReducers<IStateUsers>>({
    name: 'users',
    initialState: {
        users: [],
        isLoading: false,
        total: null,
        active: null,
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
        SET_ACTIVE_USER: (state, action: {payload: number}) => {
            state.active = action.payload;
        },
        REMOVE_FILE: (state, action: any) => {
            state.userDetail = {
                ...state.userDetail!,
                filename: null,
                fileUrl: null
            }
        }
    },
    extraReducers: extraReducer
});

export const usersReducer:Reducer<IStateUsers> = usersSlice.reducer;

export const {
    SET_USERS,
    SET_ACTIVE_USER,
    SET_USER_DETAIL_SECTION,
    REMOVE_FILE
} = usersSlice.actions;

export interface IStateUsers {
    users: IUsers[];
    isLoading: boolean;
    total: number | null;
    detailSection: EUserDetailSection | null;
    userDetail: IUserDetail | null;
    active: number | null;
}
