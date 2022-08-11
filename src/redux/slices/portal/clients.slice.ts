import { createSlice, Reducer, SliceCaseReducers } from '@reduxjs/toolkit';
import { EClientDetailSection, IClientDetail, IClients } from '../../../interfaces/redux/clients/reduxClient.interface';
import { extraReducer } from '../../extraReducers/portal/clients/clients.extraReducers';

const clientsSlice = createSlice<IStateClients, SliceCaseReducers<IStateClients>>({
    name: 'clients',
    initialState: {
        clients: [],
        isLoading: false,
        total: null,
        active: null,
        detailSection: null,
        clientDetail: null
    },
    reducers: {
        SET_ACTIVE_CLIENT: (state, action: {payload: number}) => {
            state.active = action.payload;
        },
        SET_CLIENT_DETAIL_SECTION: (state, action: {payload: EClientDetailSection | null}) => {
            state.detailSection = action.payload;
        },
    },
    extraReducers: extraReducer
});

export const clientsReducer:Reducer<IStateClients> = clientsSlice.reducer;

export const {
    SET_ACTIVE_CLIENT,
    SET_CLIENT_DETAIL_SECTION
} = clientsSlice.actions;

export interface IStateClients {
    clients: IClients[];
    isLoading: boolean;
    total: number | null;
    detailSection: EClientDetailSection | null;
    clientDetail: IClientDetail | null;
    active: number | null;
}
