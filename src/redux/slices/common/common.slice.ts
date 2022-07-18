import { createSlice, Reducer, SliceCaseReducers } from '@reduxjs/toolkit';
import { IUserTypes } from '../../../interfaces/redux/usuarios/reduxCommon.interface';
import { extraReducer } from '../../extraReducers/portal/common/common.extraReducers';

const commonSlice = createSlice<IStateCommon, SliceCaseReducers<IStateCommon>>({
    name: 'common',
    initialState: {
        userTypes: [],
        loading: false,
        exists: false
    },
    reducers: {
        
    },
    extraReducers: extraReducer
});

export const commonReducer:Reducer<IStateCommon> = commonSlice.reducer;

export interface IStateCommon {
    userTypes: IUserTypes[];
    loading: boolean;
    exists: boolean;
}
